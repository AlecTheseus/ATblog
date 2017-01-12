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
    res.render('main',{layout:'main'});
});
router.get('/blog',function (req,res) {
    res.render('blog',{layout:'main'});
});
router.get('/index',function (req,res) {
    res.render('index',{layout:'error'});
});
module.exports = router;
