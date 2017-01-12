
var express=require('express'),
    fs = require('fs'),
    url = require('url'),
    INDEX_HTML = fs.readFileSync(__dirname +'/public/index.html','utf-8'),
    ACCEPTABLE_URLS=['/signup','/login','/edit','/list','/forget','/detail'];

var app=express();


// 为了SEO优化用的，用来处理#!...显示时就没有#!
app.use(function (req,res,next){
    var parts = url.parse(req.url);
    var urlCounter = ACCEPTABLE_URLS.length;
    for(var i = 0;i<urlCounter;i++){
        //当我们找到了一条匹配客户端页面路由的配置时
        if (parts.pathname.indexOf(ACCEPTABLE_URLS[i])===0){
            return res.send(200,INDEX_HTML);}
    }
    return next();
});


app.use(require('body-parser')());



//设置handlebars 视图引擎及视图目录和视图文件扩展名
var handlebars = require('express-handlebars')
    .create({
        defaultLayout: 'main', // 设置默认布局为main
        extname: '.hbs', // 设置模板引擎文件后缀为.hbs
        //创建一个Handlebars 辅助函数，让它给出一个到静态资源的链接：
        helpers: {
            static: function(name) {
                return require('./lib/static.js').map(name);
            },
            section : function(name, options) {
                if(!this._sections) this._sections = {};
                this._sections[name] = options.fn(this);
                return null;
            }
        }
    });
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');


//静态资源
app.use(express.static(__dirname + '/public'));
app.set('port',process.env.PORT || 2001);



//配置默认进入页面
var routes=require('./routes/routes.js');
app.use('/',routes);


app.get('/test',function (req,res){
    console.log('user in');
    res.type('text/html');
    res.send('<span style="color: green">- Welcome -</span>');
});

//404
app.use(function (req,res) {
    res.type('text/html');
    res.status(404);
    res.send('<span style="color: red">404 - NOT Found</span>');
});

//500 服务器数据错误,内部逻辑错误
app.use(function (req,res,err,next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('<span style="color: red">500 - Server Error</span>');
});

app.listen(app.get('port'),function () {
    console.log('Express Started on http://localhost:'+app.get('port')+'; press Ctrl + C to terminate');
});





