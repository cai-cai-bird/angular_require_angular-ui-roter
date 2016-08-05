/**
 * Created by sa on 16-8-3.
 */
define(["require","module/module","service/loginService"],function (require,app) {
    require(['css!../../../css/login']);
    app.controller('loginController',["$scope","CalcService",function($scope,CalcService) {
        $scope.data=CalcService.name;
    }]);
});
