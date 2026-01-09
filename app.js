const express = require('express');
require('dotenv').config();
const app = express();
const port = 80;

// Log periodically to demonstrate runtime logs (every 5 seconds)
let logCounter = 0;
setInterval(() => {
    logCounter++;
    console.log(`Log number: ${logCounter} - Server is running ${process.env.NAME}`);
}, 5000);

app.get('/', (req, res) => {
    console.log('GET / - Request received');
    res.send('Hello World!');
});

app.get('/api/:id', (req, res) => {
    console.log(`GET /api/${req.params.id} - Request received`);
    res.send(`Get resource for ${req.params.id}.`);
});

app.listen(port, () => {
    console.log(`Name: ${process.env.NAME}`);
    console.log(`Example app listening at http://localhost:${port}`);
    console.log('Runtime logs will appear here and be captured by Stackyn');
});