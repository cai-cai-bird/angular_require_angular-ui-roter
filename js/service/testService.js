/**
 * Created by liuxin on 2016/8/3 0003.
 */
define(["./serviceMoudle"],function (serviceModule) {
    return serviceModule.factory('testService',  ['$http',function ($http) {
        return [1,2,3,4,5];
   }]);
});