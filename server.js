//dependencies
const express = require('express');
const PORT = process.env.PORT || 3001;

//routes
const apiRoutes = require('./routes/api/index')
const htmlRoutes = require('./routes/html/index');

const app = express();

// parse incoming data
app.use(express.urlencoded({ extended: true }));

// parse JSON
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('public'));


app.listen(PORT, () => {
    console.log(`API server now ready on port http://localhost:${PORT}!`);
  });