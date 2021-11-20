const home = require('./home')

const { multipleMongooseToObject } = require('../util/mongoose');
function route(app) {
    app.use('/', home);
    
}
module.exports = route;
