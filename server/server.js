const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// app.use('/', express.static('../client/dist')); // Host your dist folder up to the server
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json()); // Alternative to BodyParser

// If you had to handle requests on the server side, this is where that would occur
app.get('/', (req, res) => {
		// Handle the request
		// -- Could make DB queries here
		// Send back O-K
		res.status(200).send('The server is taking requests to the products/:id endpoint');
});

// Listening for requests on the PORT
app.listen(PORT, () => {
    console.log('Serving up now at '+ JSON.stringify(PORT))
});
