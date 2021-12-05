import express from 'express';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';

import authenticateMiddleware from './middlewares/authenticate';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', authenticateMiddleware, async (req, res) => {
  res.json({ message: 'Welcome to development world!' });
});

app.post('/get-token', body('email').isEmail(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email } = req.body;
  const jwtToken = jwt.sign({ email }, process.env.SECRET_KEY as string);
  res.json({ jwtToken });
});

export default app;
