var express = require('express');
var router = express.Router();

var Users = require('../models/users');//导入模型数据模块

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('user');
});

//create 创建用户
router.post('/create', function(req, res) {
  console.log('req.body', req.body);
  //   new TodoModel({ //实例化对象，新建数据
  //       user_name: req.body.userName,
  //       updated_at: Date.now()
  //   }).save(function(err, todo, count) { //保存数据
  //       console.log('内容', todo); //打印保存的数据
  //       res.json({ code: '0', msg: "ok" });
  //   });
  Users.create({ //实例化对象，新建数据
          user_name: req.body.userName,
          updated_at: Date.now()
  },function (err, data) {
          if (err) throw err;
          console.log('注册成功');
          res.json({ code: '0', msg: "新建成功" });

  })
})

// 查询接口
router.post('/search', function(req, res, next) {
  Users.find().sort('updated_at').exec(function(err, list, count) {
     console.log("list===", list)
     res.send(list);
  });
})

//更新用户
router.post('/update',function(req,res){
  //res.send(req);
  console.log(req.body);
  Users.findById(req.body.id,function(err,todo){
      todo.user_name = req.body.userName;
      todo.updated_at = Date.now();
      todo.save();
  })
  res.json({ code: '0', msg: "已更新" });
})

//删除
router.post('/destroy',function(req,res){
  Users.findById(req.body.id, function(err, todo) {
      todo.remove(function(err, todo) {
          res.json({ code: '0', msg: "已删除" });
      });
  });
})


module.exports = router;
