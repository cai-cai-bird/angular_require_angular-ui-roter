/**
 * Created by liuxin on 2016/8/4 0004.
 */
define(["angular"],function (angular) {
    var serviceModule=angular.module("serviceModule",[]);
    serviceModule.factory('CalcService', function(){
        return {
            name:"liuxin"
        }
    });
    return serviceModule;
});
