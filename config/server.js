const dotenv = require('dotenv');
dotenv.config();

const pc = require('picocolors');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());

// Ajuste de la ruta para servir archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

const PORT = process.env.PORT ?? 3000;

// Ajuste de las rutas para las vistas
app.get('/', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../views', 'principal.html'));
});

app.get('/principal', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../views', 'principal.html'));
});

// modificar cuando JUAN me mande lo que le falta
app.get('/productos', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../views', 'crear_productos.html'));
});

app.get('/login', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../views', 'login.html'));
});

app.use((req, res) => {
  res.statusCode = 404;
  res.status(404).send('<h1>404 not found</h1>');
});

app.listen(PORT, () => {
  console.log(pc.magenta(`server listening on http://localhost:${PORT}`));
});