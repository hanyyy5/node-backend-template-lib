var mongoose = require('mongoose')

var UsersSchema = new mongoose.Schema({
    user_name: String, //定义一个属性user_name，类型为String
    updated_at: Date //定义一个属性updated_at，类型为Date
});
 
module.exports = mongoose.model('Users', UsersSchema)