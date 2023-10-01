var express = require('express');
var router = express.Router();

// Home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// About page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

// Projects page
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

// Services page
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

// Contact page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
