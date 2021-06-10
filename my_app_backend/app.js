const express = require('express');
const app = express();
var path = require('path');
var cors = require('cors')
app.use(cors())

const options = {
    root: path.join(__dirname)
};
const fileName = 'citydata.json';
app.get('/', (req, res) => res.sendFile(fileName, options, function (err) {
    if (err) {
        next(err);
    } else {
        console.log('Sent:', fileName);
    }
}));

app.listen(5000, () => console.log('Example app listening on port 5000!'));