var express = require('express');
var app = express();
//解析表单数据
app.use(require('body-parser')());
//设置handlebars视图引擎及视图目录及视图文件扩展名
var handlebars=require('express-handlebars')
    .create({
        defaultlayout:'main',//设置默认布局为main
        extname:'.hbs',//设置魔板引擎文件后缀为.hbs
        //创建一个handlebars辅助函数，让他给出一个到静态资源的链接
        helpers:{
            static:function (name) {
                return require('./lib/static.js').map(name);
            },
            section:function (name, options) {
                if(!this._section)this._section={};
                this._section[name]=options.fn(this);
                return null;
            }
        }
    });
app.engine('hbs',handlebars.engine);
app.set('view engine','hbs');
//static resources
app.use(express.static(__dirname + '/public'));
app.set('port',process.env.PORT||2001);

//配置默认进入页面
var routes=require('./routes/routes.js');
app.use('/',routes);
/*
app.get('/',function (req,res) {
    console.log('user in');
    res.type('text/html');
    res.send('<span style="color:green">- Welcome -</span>');
});
*/

app.post('/user_in',function (req,res) {
    if(req.body){
        console.log(req.body.email);
        console.log(req.body.password);
        res.send('daibige成功了');
    }else{ console.log('Nothing Upon');
        res.send('daibige失败了');
    }
});


app.get('/test',function (req, res) {
    res.render('test');
});


//404
app.use(function (req,res) {
    res.type("text/html");
    res.status(404);
    // res.send('<span style="color:green">- 404 -</span>')
    res.render('errors/404',{layout:'error'});
});

//500
app.use(function (req,res,err,next) {
    console.log(err.stack);
    res.type("text/plain");
    res.status(500);
   // res.send('<span style="color:green"> 500 - Server Error </span>')
    res.render('errors/500',{layout:'error'});
});

app.listen(app.get('port'),function () {
    console.log('Express Started on http://localhost:'+app.get('port')+'; press Ctrl + C to terminate');
});


