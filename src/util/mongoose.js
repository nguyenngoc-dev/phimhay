module.exports = {
    //do thư viên handlebar có bảo mật không đc truy cập trực tiếp vào các thuộc tính của
    // object đc tạo từ constructor function nên ta dùng thư viện mongoose có phương thức toObject để chuyển dữ liệu
    // thành Object thường để render đc ra view
    multipleMongooseToObject: function (mongoose) {
        return mongoose.map((mongoose) => mongoose.toObject());
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
