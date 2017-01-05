/**
 * Created by ThinkPad User on 2017/1/3.
 */

var express = require('express');

var router = express.Router();

router.get('/',function (req,res) {
    console.log('user in');
    res.render('main',{layout:'main'});
});

router.get('/test',function (req,res) {
    res.render('test',{layout:'error'});
});
router.get('/index',function (req,res) {
    res.render('index',{layout:'error'});
});
module.exports = router;
