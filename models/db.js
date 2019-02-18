// 数据库连接配置
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var settings = require('../settings');
var dbName = settings.db;
var url = 'mongodb://txljh:fannie@localhost:27017/' + dbName

mongoose.connect(url)
/**
 * 连接成功
 */
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + url);
});

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

var Schema = mongoose.Schema
module.exports = Schema