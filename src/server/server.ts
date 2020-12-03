import dotenv from 'dotenv';
dotenv.config();

import path from 'path';
import http from 'http';

import express from 'express';

const app = express();

const server = new http.Server(app);

console.log(`La aplicación está corriendo en el entorno: (${process.env.NODE_ENV})`);

const initServer = async () => {
  app.use('/dist', express.static(path.join(__dirname, `../../dist`)));
  app.use('/webcomponents', express.static(path.join(__dirname, `../../node_modules/@webcomponents/webcomponentsjs`)));
  app.use('/', express.static(path.join(__dirname, `../../dist`)));

  server.listen(process.env.PORT, () => {
    console.log(`La aplicación está corriendo en: <<< port ${process.env.PORT} >>>`);
  });
};

initServer().catch((err) => {
  if (server && server.listening) server.close();
  console.log('Error del servidor: ', err);
  process.exitCode = 1;
});
