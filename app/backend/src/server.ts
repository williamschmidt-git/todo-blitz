import express from 'express';
import 'dotenv/config';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  return res.json({ message: 'hello world' });
})

app.listen(PORT, () => {`listen on port ${PORT}`});
