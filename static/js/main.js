function a() {
  swal({
    title: "🏅Major Memes",
    text: "Created with 👨‍💻 by Salay Abdul Muhaimin",
    icon: "info",
  }).then(() => {
    swal({
      title: "🏅Major Memes",
      text: "Special thanks 🙏 to D3vd",
      icon: "info",
    });
  });
}


// Importing required modules
const express = require('express');
const app = express();
const request = require('request');
const path = require('path');

// Defining the route
app.get('/', (req, res) => {
    try {
        request('https://meme-api.com/gimme/wholesomememes', (error, response, body) => {
            if (error) {
                res.send('<h1>There was an Error</h1>');
            }
            else {
                const data = JSON.parse(body);
                const meme_large = data.preview[data.preview.length - 2];
                const subreddit = data.subreddit;
                res.sendFile(path.join(__dirname + '/index.html'), { meme_pic: meme_large, subreddit: subreddit });
            }
        });
    }
    catch (e) {
        res.send('<h1>Server Overload</h1>');
    }
});

// Starting the server
app.listen(3000, () => console.log('Server started on port 3000'));
