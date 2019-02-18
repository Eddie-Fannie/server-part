// 用户
var mongoose = require('mongoose');
var Schema = require('db')
var UserSchema = new Schema({
    userRegister: {
        phoneNum: Number,
        pwd: String
    },
    infor: {},
    updateTime: {
        type: Date,
        default: Date.now
    }
});

// 创建了一个User的表，并且格式位UserSchema的格式
const Models = {
    Login: mongoose.model('User', UserSchema)
}
module.exports = Models