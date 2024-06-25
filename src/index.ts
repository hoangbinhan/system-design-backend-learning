import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, express with typescript ');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
