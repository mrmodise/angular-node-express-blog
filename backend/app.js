const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Post = require('./models/post');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mean2', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use((req, res, next) => {
  next();
});

app.post('/api/post/create', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });

  post.save().then(result => {
    res.status(201).json({
      message: "Post added successfully",
      id: result._id
    });
  });
});

app.get("/api/posts", (req, res, next) => {
  Post.find().then(posts => {
    res.status(200).json({
      message: "Posts posted successfully",
      posts: posts
    });
  });
});

app.delete('/api/post/:id', (req, res, next) => {
  Post.deleteOne({_id: req.params.id}).then(() => {
    res.status(201).json({message: 'Post successfully deleted'});
  });
});


module.exports = app;
