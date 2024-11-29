import express from 'express';

const app = express();
const port = 3000;

app.get('/palabras', (_req, res) => {
  const palabras = ["hola", "mundo", "api", "typescript", "express"];
  res.json(palabras);
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
