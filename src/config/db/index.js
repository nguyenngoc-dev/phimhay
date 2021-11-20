const mongoose = require('mongoose');
async function connectDb() {
    try {
        await mongoose.connect('mongodb://localhost:27017/movie_web');
        console.log('connected');
    } catch (error) {
        console.log('error');
    }
}

module.exports = { connectDb };
