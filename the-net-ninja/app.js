const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const app = express();
const dbURI = 'mongodb+srv://sample-user:teste123@intro-node.fyzdp.mongodb.net/intro-node?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((error) => console.error(error));

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/add-blog', (request, response) => {
  const blog = new Blog({
    title: 'new blog 2',
    snippet: 'about my new blog 2',
    body: 'more about my new blog 2',
  });

  blog.save()
    .then((result) => response.send(result))
    .catch((error) => console.error(error));
});

app.get('/all-blogs', (request, response) => {
  Blog.find()
    .then((result) => response.send(result))
    .catch((error) => console.error(error));
});

app.get('/single-blog', (request, response) => {
  Blog.findById('61335c920cabe9ffca0dca2d')
    .then((result) => response.send(result))
    .catch((error) => console.error(error));
})

app.get('/', (request, response) => {
  response.redirect('/blogs')
});

app.get('/blogs', (request, response) => {
  Blog.find().sort({ createdAt: -1 })
    .then((result) => {
      response.render('index', { title: 'All blogs', blogs: result });
    })
    .catch((error) => console.error(error));
});

app.get('/about', (request, response) => {
  response.render('about', { title: 'About' });
});

app.get('/blogs/create', (request, response) => {
  response.render('create', { title: 'Create a new blog' });
})

app.use((request, response) => {
  response.status(404).render('404', { title: '404' });
});