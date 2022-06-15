const express = require('express')
const path = require('path');
const app = express()
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/index.html'));
  });

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/about.html'));
  });

app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/contact.html'));
  });

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '/views/404error.html'));
});

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})