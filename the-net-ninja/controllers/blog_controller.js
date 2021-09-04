const Blog = require('../models/blog');

const blog_index = (request, response) => {
  Blog.find().sort({ createdAt: -1 })
    .then((result) => {
      response.render('blogs/index', { title: 'All blogs', blogs: result });
    })
    .catch((error) => console.error(error));
};

const blog_details = (request, response) => {
  const { id } = request.params;

  Blog.findById(id)
    .then((result) => {
      response.render('blogs/details', { title: 'Blog Details', blog: result });
    })
    .catch((error) => {
      response.status(404).render('404', { title: 'Blog not found' });
    });
};

const blog_create_get = (request, response) => {
  response.render('blogs/create', { title: 'Create a new blog' });
};

const blog_create_post = (request, response) => {
  const blog = new Blog(request.body);

  blog.save()
    .then((result) => response.redirect('/blogs'))
    .catch((error) => console.error(error));
};

const blog_delete = (request, response) => {
  const { id } = request.params;

  Blog.findByIdAndDelete(id)
    .then((result) => response.json({ redirect: '/blogs' }))
    .catch((error) => console.error(error));
};

module.exports = { blog_index, blog_details, blog_create_get, blog_create_post, blog_delete };