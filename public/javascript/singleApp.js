angular.module('userSingleApp',['ngRoute','ngTable'])
//配置路由
    .config(['$locationProvider','$routeProvider',
        function($locationProvider,$routeProvider){
            //如果后端是PHP,java，不是Node.js的，就不要配置下面的两行
            //AngularJS中路由不带#号
            $locationProvider.html5Mode(true);
            //AngularJS中的搜索引擎优化
            $locationProvider.hashPrefix('!');
            //路由到页面
            $routeProvider
                .when('/singleApp.html',{
                    templateUrl: 'template/login.hbs',
                    controller : 'LoginController'
                })
                .when('/edit',{
                    templateUrl: 'template/edit.hbs',
                    controller : 'EditController'
                })
                .when('/login',{
                    templateUrl: 'template/login.hbs',
                    controller : 'LoginController'
                })
                .when('/signup',{
                    templateUrl: 'template/signup.hbs',
                    controller : 'SignupController'
                })
                .when('/forget',{
                    templateUrl: 'template/forget.hbs',
                    controller : 'ForgetController'
                })
                .when('/list',{
                    templateUrl: 'template/list.hbs',
                    controller : 'ListController'
                })
                .when('/detail',{
                    templateUrl: 'template/detail.hbs',
                    controller : 'DetailController'
                });
        }])
    .controller('EditController',[function () {
        var self=this;
        self.message='编辑用户界面'
    }])
    .controller('LoginController',['$http',function ($http) {
        var self=this;
        self.user={};
        self.message='用户登录界面';
        self.login=function () {
            console.log( self.user);
            //angularJS中的post方法，发送数据
            $http.post('/ng-login',self.user).then(
                function (resp) {
        self.lock=true;
        //检验用户数据是否存在
            //resp.data.msg为服务器返回的信息
            self.message=resp.data.msg;
            self.messageFull=resp.data.user.username+" 你的密码是："+resp.data.user.password;
        }
    );
}
}])
.controller('SignupController',['$http',function ($http) {
    var self=this;
    self.message='用户注册界面';
    self.signInfos={};
        self.changeEvent=function () {
            var da={};
            da.username=self.signInfos.username;
            console.log(da);
            $http.post('/ng-check',da).success(function (response) {
                self.userback=response;
                self.userback=='用户已经存在'?self.lock=true:self.lock=false;
            });
        };
        //用户注册提交数据
        self.signupFormSub=function () {
            console.log( self.signInfos );
            // angularJS中的post方法，发送数据
            $http.post('/ng-signup',self.signInfos).then(
                function (resp) {
                    //resp.data.msg为服务器返回的信息
                    self.message=resp.data.msg;
                    self.signupResult=resp.data.user.username+" 你的密码是："+resp.data.user.password;
                }
            );
            self.signInfos.username='';
            self.signInfos.password='';
        };
        //列出所有已经出注册的用户信息
        self.listUsers=function () {
            $http.post('/ng-list').success(function (response) {
                self.getdata=response;
            });
        };
        self.reverse=true;
        self.listReverse=function () {
            self.reverse=!self.reverse;
        }
    }])
    .controller('ForgetController',[function () {
        var self=this;
        self.message='忘记密码界面'
    }])
    .controller('DetailController',[function () {
        var self=this;
        self.message='MyDetail';

        self.personCount='1';

        self.info={};
        self.mouseInfo={};
        self.keyInfo={};
        self.keyStroke=function (event) {
            self.keyInfo.keyCode=event.keyCode;
        };
        self.mouseClick=function (event) {
            self.mouseInfo.clientX=event.clientX;
            self.mouseInfo.clientY=event.clientY;
            self.mouseInfo.screenX=event.screenX;
            self.mouseInfo.screenY=event.screenY;
        }
    }])
//ng-table
    .controller('ListController', ['NgTableParams',function (NgTableParams) {

        var self=this;
        self.message='List界面';
        self.all=[
            {name:"Plantagenet",Prestige:14,Piety:42,Bannermen:15},
            {name:"Ludwigs",Prestige:16,Piety:87,Bannermen:21},
            {name:"Capet",Prestige:12,Piety:34,Bannermen:9},
            {name:"Caroline",Prestige:43,Piety:76,Bannermen:15},
            {name:"Ducas",Prestige:53,Piety:99,Bannermen:18},
            {name:"Lancaster",Prestige:25,Piety:25,Bannermen:12},
            {name:"Leon",Prestige:10,Piety:52,Bannermen:23},
            {name:"Habsburg",Prestige:43,Piety:76,Bannermen:3},
            {name:"Windsor",Prestige:54,Piety:76,Bannermen:1},
            {name:"Mameluke",Prestige:64,Piety:89,Bannermen:23},
            {name:"Plantagenet",Prestige:14,Piety:42,Bannermen:15},
            {name:"Ludwigs",Prestige:16,Piety:87,Bannermen:21},
            {name:"Capet",Prestige:12,Piety:34,Bannermen:9},
            {name:"Caroline",Prestige:43,Piety:76,Bannermen:15},
            {name:"Ducas",Prestige:53,Piety:99,Bannermen:18},
            {name:"Lancaster",Prestige:25,Piety:25,Bannermen:12},
            {name:"Leon",Prestige:10,Piety:52,Bannermen:23},
            {name:"Habsburg",Prestige:43,Piety:76,Bannermen:3},
            {name:"Windsor",Prestige:54,Piety:76,Bannermen:1},
            {name:"Mameluke",Prestige:64,Piety:89,Bannermen:23},
            {name:"Plantagenet",Prestige:14,Piety:42,Bannermen:15},
            {name:"Ludwigs",Prestige:16,Piety:87,Bannermen:21},
            {name:"Capet",Prestige:12,Piety:34,Bannermen:9},
            {name:"Caroline",Prestige:43,Piety:76,Bannermen:15},
            {name:"Ducas",Prestige:53,Piety:99,Bannermen:18},
            {name:"Lancaster",Prestige:25,Piety:25,Bannermen:12},
            {name:"Leon",Prestige:10,Piety:52,Bannermen:23},
            {name:"Habsburg",Prestige:43,Piety:76,Bannermen:3},
            {name:"Windsor",Prestige:54,Piety:76,Bannermen:1},
            {name:"Mameluke",Prestige:64,Piety:89,Bannermen:23},
            {name:"Plantagenet",Prestige:14,Piety:42,Bannermen:15},
            {name:"Ludwigs",Prestige:16,Piety:87,Bannermen:21},
            {name:"Capet",Prestige:12,Piety:34,Bannermen:9},
            {name:"Caroline",Prestige:43,Piety:76,Bannermen:15},
            {name:"Ducas",Prestige:53,Piety:99,Bannermen:18},
            {name:"Lancaster",Prestige:25,Piety:25,Bannermen:12},
            {name:"Leon",Prestige:10,Piety:52,Bannermen:23},
            {name:"Habsburg",Prestige:43,Piety:76,Bannermen:3},
            {name:"Windsor",Prestige:54,Piety:76,Bannermen:1},
            {name:"Mameluke",Prestige:64,Piety:89,Bannermen:23},
            ];
        self.tableParams = new NgTableParams({},{dataset:self.all});
    }])
;


angular.module('MainApp',['userSingleApp']);

