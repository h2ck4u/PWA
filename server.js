const express = require('express');
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;


const app = express();

// Redirect HTTP to HTTPS,
app.use(redirectToHTTPS([/localhost:(\d{4})/], [], 301));

// Handle requests for static files
app.use(express.static('public'));

app.get('', (req, res ) => {
  res.sendFile('public/index.html');
});

// Start the server
app.listen('8000', () => {
  console.log('server started on port 8000...');
});

