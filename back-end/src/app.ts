import 'dotenv/config';
import express from 'express';

const app = express();

app.get('/', async (_req, res) => {
  res.json({ message: 'Welcome to development world!' });
});

export default app;
