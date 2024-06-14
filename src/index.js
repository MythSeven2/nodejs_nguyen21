const express = require('express');
const morgan = require('morgan');
const handlebars = require("express-handlebars").engine;
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static( path.join(__dirname,'public')));
//HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "resources/views"));

app.get('/', (req, res) => {
  res.render('home');
})
app.get('/', (req, res) => {
  res.render('news');
})

app.listen(3000);