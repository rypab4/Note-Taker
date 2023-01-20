const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

//routes
const apiRoutes = require('./routes/api')
const htmlRoutes = require('./routes/html');

// parse incoming data
app.use(express.urlencoded({ extended: true }));

// parse JSON
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('public'));


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });