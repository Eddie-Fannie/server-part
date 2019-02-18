require('../models/user')
var mongoose = require('mongoose');

var modelUser = mongoose.model('User')

// let detectInfo = function (req) {
//     return modelUser.find({phoneNum: req.body.userRegister.phoneNum}).then(data => {
//         if (data.length === 0) {
//             return (req.body)
//         } else {
//             throw new Error('该手机号已经注册过，可以直接登录')
//         }
//     })
// }
// let signUp = function (req, res) {
//     detectInfo(req).then(response => {
//         const user = new modelUser(response)
//         user.save(()=>{
//             req.session.user = user
//             req.session.save()
//             res.jsonp({
//                 data: user
//             })
//         }, err => {
//             res.status(400).send({
//                 error: error
//             })
//         })
//     }, error => {
//         res.status(400).send({
//             error: error.message
//         })
//     })
// }

let signUp = function (req,res) {
    models.Login.find({phoneNum:req.body.userRegister.phoneNum},(err,data) => {
        if(err) {
            res.send({'status': 1002, 'message': '查询失败', 'data': err});
        }else {
            console.log('查询成功'+data)
            if(data.length>0) {
                res.send({'status': 1001, 'message': '该手机号已经注册，可以直接登录！'});
            }else {
                let newUser = new models.Login({
                    phoneNum: req.body.userRegister.phoneNum,
                    pwd: req.body.userRegister.pwd,
                });
                newUser.save((err,data) => {
                    if(err) {
                        res.send({'status': 1002, 'message': '注册失败！','data': err})
                    }else {
                        res.send({'status': 1000, 'message': '注册成功'});
                    }
                })
            }
        }
    })
}

module.exports = {
    signUp
}