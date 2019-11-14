const express = require('express');
const app = express();
const connectDB = require('./config/db');

connectDB();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('API running!'));

//Middleware
app.use(express.json({ extended: false }))

//App listen function
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });