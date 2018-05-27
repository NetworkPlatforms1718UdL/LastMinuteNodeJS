const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/about', (req, res) => res.render('pages/about'))
  .get(/se[a-z]/, (req, res) => res.render('pages/services'))
  .get('/faqs', (req, res) => res.render('pages/faqs'))
  .get('/card', (req, res) => res.render('pages/card'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
