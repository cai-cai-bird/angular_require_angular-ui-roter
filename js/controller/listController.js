/**
 * Created by sa on 16-8-5.
 */
define(["require","module/module","service/listService"],function (require,app) {
    app.controller('listController',["$scope","listService",function($scope,listService) {
        $scope.data=listService.dataList;
    }]);
});
