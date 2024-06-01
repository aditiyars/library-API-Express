const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const memberRoutes = require('./routes/memberRoutes');
const sequelize = require('./database');
const docs = require('./swagger')

const app = express();

app.use(bodyParser.json());
app.use('/api/v1', bookRoutes);
app.use('/api/v1', memberRoutes);

docs(app)

// Sync the database
sequelize.sync()
  .then(() => console.log('Database connected and synchronized'))
  .catch(err => console.error('Database connection error:', err));


module.exports = app;

