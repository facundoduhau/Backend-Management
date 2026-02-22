import express from 'express';
import cors from 'cors';

const app = express();

// Basics
app.use(express.json({limit: '16kb'}));
app.use(express.urlencoded({extended: true, limit: '16kb'}));
app.use(express.static('public'));

// CORS

app.get('/', (req, res) => {
  res.send('Hello World!')
});

export default app;