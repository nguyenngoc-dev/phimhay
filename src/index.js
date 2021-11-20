const express = require('express');
var path = require('path');
var methodOverride = require('method-override');

const fs = require('fs'); // thư viện file system thực hiện với file trong app
const morgan = require('morgan'); // giành cho dev để hiện inspect của node khi develop
const handlebars = require('express-handlebars'); // template engine để phân chia UI
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'resources/public')));
const port = 3000; 
app.engine(
    'hbs',
    handlebars({ extname: '.hbs'})
);

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources/views'));
const route = require('../src/routes');
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
