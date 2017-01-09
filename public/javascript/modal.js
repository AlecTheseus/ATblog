angular.module('mymodal',[])
//.component语法来声明组件，名字交modal
    .component('mymodal',{//配置新标签mymodal要用到的模板
        //组件使用的模板路径
        templateUrl:'template/mymodal.hbs',
        //对于这个组件的控制器是warningFuns
        //controller:warningFuns
    });
/*//给组件注入参数$scope
warningFuns.$inject = ['$scope'];
//声明函数warningFuns
function warningFuns($scope) {
    $scope.message = "HELLO";
}*/

