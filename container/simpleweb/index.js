const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hehe here!');
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});