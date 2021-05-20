const express = require("express");
const PORT = process.env.PORT || 3001;
const jsonServer = require('json-server');
// const { addPassword, getPasswords } = require('../db/index');

const app = express();
const server = jsonServer.create();
const router = jsonServer.router('/home/tony/Nextcloud/HR-SEA16/mvp/firstpass/db/examples.json');

// app.get('/api', (req, res) => {
//   res.status(200).send('Yoloswag');
// });

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });

server.use(router)
server.listen(PORT, () => {
  console.log('JSON Server is running!')
});
