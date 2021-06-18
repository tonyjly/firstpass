const express = require("express");
const PORT = process.env.PORT || 3001;
const jsonServer = require('json-server');
// const { addPassword, getPasswords } = require('../db/index');

const app = express();
const server = jsonServer.create();
const router = jsonServer.router('./db/examples.json');

// app.get('/api', (req, res) => {
//   res.status(200).send('Success');
// });

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });

server.use(router)
server.listen(PORT, () => {
  console.log('JSON Server is running!')
});
