
const express = require('express');
const fs = require('fs');



const app = express();


app.get('/', (req, res) => {
    res.status(200).type('text/html')
    res.send('index.html')
  }) 
app.use(
    '/', 
    express.static(`${__dirname}/img`)
)

app.listen(8080, () => {
    console.log('Application listening on port 8080!');
});


