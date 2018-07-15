const express = require("express");

const app = express();

app.use((req, res, next) => {
  next();
});

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "1",
      title: "Botlhale's birthday",
      content: "Donec non enim in turpis pulvinar facilisis. Ut felis."
    },
    {
      id: "2",
      title: "Pellentesque habitant morbi ",
      content: "Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
    }, {
      id: "3",
      title: "tempor sit amet, ante",
      content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. "
    },
    {
      id: "4",
      title: "ultricies in, diam. Sed arcu",
      content: "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante."
    }, {
      id: "5",
      title: "Lorum ipsum dolor sit ame",
      content: "Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. "
    },
    {
      id: "6",
      title: "Maabane ko Sandton",
      content: "Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. "
    }, {
      id: "7",
      title: "Ke eng gone moo",
      content: "Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi."
    }, {
      id: "8",
      title: "No matter the project, please remember to replace your fancy HTML-",
      content: "Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat."
    }, {
      id: "9",
      title: "atin, which means your average",
      content: "Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. "
    }];

  res.status(200).json({
    message: "Posts posted successfully",
    posts: posts
  });

  next();
});


module.exports = app;
