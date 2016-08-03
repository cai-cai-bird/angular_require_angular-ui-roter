/**
 * Created by liuxin on 2016/8/3 0003.
 */
define(["../serviceModule"],function (serviceModule) {
    return serviceModule.service('testService',  ['$http',function ($http) {
        return [1,2,3,4,5];
   }]);
});