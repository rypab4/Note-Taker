
const express = require('express')
const PORT = process.env.PORT || 3001;

const app = express();

// import the routes
const apiRoutes = require('./routes/api/apiRoutes');
const htmlRoutes = require('./routes/html/htmlIndex');

// parse income string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON
app.use(express.json());

// use express static on public folder
app.use(express.static('public'));


app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});