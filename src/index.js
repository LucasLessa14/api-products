const port = 3003;

const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./controllers/controllers')(app);

app.listen(port, () => 
    console.log(`API is running on port ${ port }.`)
);
