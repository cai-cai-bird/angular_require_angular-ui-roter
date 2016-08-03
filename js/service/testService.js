/**
 * Created by liuxin on 2016/8/3 0003.
 */
define(["../module/module"],function (app) {
    return app.service('testService',  ['$http',function ($http) {
        return [1,2,3,4,5];
   }]);
});