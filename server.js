const express = require('express');
const path = require('path');
const router = require('express').Router();
const createNewNote = require('./lib/notes');

const PORT = process.env.PORT || 3001;
const app = express();
// const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/apiRoutes/htmlRoutes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
// app.use('/api', apiRoutes);
app.use('/', htmlRoutes);




app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});