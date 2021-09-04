const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blog_routes');

const app = express();
const dbURI = 'mongodb+srv://sample-user:teste123@intro-node.fyzdp.mongodb.net/intro-node?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((error) => console.error(error));

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (request, response) => {
  response.redirect('/blogs')
});

app.get('/about', (request, response) => {
  response.render('about', { title: 'About' });
});

app.use('/blogs', blogRoutes);

app.use((request, response) => {
  response.status(404).render('404', { title: '404' });
});