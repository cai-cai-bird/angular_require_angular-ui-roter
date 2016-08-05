/**
 * Created by sa on 16-8-5.
 */
define(["require","module/module","service/listService"],function (require,app) {
    app.controller('detailController',["$scope","listService","$stateParams","$state",function($scope,listService,$stateParams,$state) {
        if(!$stateParams.id){
            $state.go('index.list');
            return;
        }
        angular.forEach(listService.dataList,function (data,index,array) {
            if(data.id==$stateParams.id){
                $scope.detail=data.content;
                return;
            }
        })

    }]);
});