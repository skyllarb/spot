const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
  res.render('homepage', {
    loggedIn: req.session.loggedIn
  });
});

router.get('/dogs', (req, res) => {
  res.render('dogs', {
    loggedIn: req.session.loggedIn
  });
});

router.get('/cats', (req, res) => {
  res.render('cats', {
    loggedIn: req.session.loggedIn
  });
});

router.get('/login', (req, res) => {
  if(req.session.loggedIn){
    res.redirect('/');
    return;
  }
  res.render('login');
});


module.exports = router;