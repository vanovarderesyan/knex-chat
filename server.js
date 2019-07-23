const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');


    // This will be our application entry. We'll setup our server here.
// Set up the express app
// Log requests to the console.
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/static', express.static(path.join(__dirname, 'assets', 'image')));
// app.use('/api/comman', require('./routes/common'))
app.use('/api/admin', require('./routes/admin'))

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});