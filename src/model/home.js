const mongoose = require('mongoose');
const db = require('../config/db');
// thư viện để soft delete(xóa mềm)
const mongoose_delete = require('mongoose-delete');
db.connectDb();
//connect đến database student trên mogopash ở đây localhost là mặc định ở cổng 27017
const Schema = mongoose.Schema;
// Tạo một schema, một khung để có thể làm việc với dữ liệu trên data base

const home = new Schema(
    {
        title: String,
        author: String,
        description: String,
        imageUrl: String,
    },
    {
        collection: 'home', // thêm collection để cho biết đây là làm việc trong collection image
        // nếu k thêm thì nó sẽ làm việc với collection ở dưới model
        timestamps: true,
    }
);
home.plugin(mongoose_delete, { overrideMethods: 'all', deletedAt: true });

module.exports = mongoose.model('home', home);
