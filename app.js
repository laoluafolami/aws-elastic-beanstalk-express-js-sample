const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('You are welcome to the world of CI/CD! We will be show casing how the delivery pipeline work whenever you push and commit your code repositry in github. You just seat back and enjoy the magic'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
