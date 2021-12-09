import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';

import authenticateMiddleware from './middlewares/authenticate';
import config from 'config';

const app = express();
const isDev: boolean = config.get('isDev');
const secretKey: string = config.get('secretKey');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
if (isDev) {
  app.use(morgan('tiny'));
}

app.get('/', authenticateMiddleware, async (req, res) => {
  res.json({ message: 'Welcome to development world!' });
});

app.post('/get-token', body('email').isEmail(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email } = req.body;
  const jwtToken = jwt.sign({ email }, secretKey);
  res.json({ jwtToken });
});

export default app;
