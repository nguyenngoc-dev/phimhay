const express = require('express');
const {
    multipleMongooseToObject,
    mongooseToObject,
} = require('../util/mongoose');
const homeModel = require('../model/home');

const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

class HomeController {
    // get / 
    home(req,res,next) {
      // đẩy dữ liệu đc fetch từ movie db lên database;
      // const baseUrl = 'https://api.themoviedb.org/3';
      // const apiKey = '2a4dc62bf5a4c5bc74bf603b7b03a54c';
      // const urlHome = baseUrl + '/discover/movie?sort_by=popularity.desc&api_key=' + apiKey;
      // fetch(urlHome)
      // .then(res => res.json())
      // .then(data=> {
      //   homeModel.create(data)
      //     .then(data => {
      //       res.json(data)
      //     })
      //     .catch(next)
      // })
          res.render('home')
      // homeModel.find({})
      // .then(data => {
      //   res.json(data)
      // })
      // .catch(next)
      
    }
     
   
    
    
}

module.exports = new HomeController();