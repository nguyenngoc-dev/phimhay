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

const port = process.env.PORT; 
app.engine(
    'hbs',
    handlebars({ extname: '.hbs', 
    helpers: { 
        sum: (a, b) => a + b ,
        sortable : (field, sort) => {
            const sortType = field === sort.column ? sort.type : 'default'
            const icons = {
                default: "oi oi-elevator",
                asc: 'oi oi-sort-ascending',
                desc: "oi oi-sort-descending"
            }
            const  types = {
                default: "desc",
                asc: 'desc',
                desc: "asc"
            }
            const icon = icons[sortType]
            const type = types[sortType]
            return ` <a href="?_sort&column=${field}&type=${type}">
                     <span class='${icon}'></span>
                    </a>`
        },
    
    } 

})
);

app.set('view engine', 'hbs');

// app.set('views', path.join(__dirname, 'resources/views'));
// const route = require('../src/routes');
// route(app);
app.get('/', (req, res, next) => {
    res.json('lol')
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
