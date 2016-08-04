/**
 * Created by sa on 16-8-3.
 */
define(["../module/module","../service/testService"],function (app,aa) {
console.log(aa)
    app.controller("loginController",["$scope",function ($scope,testService) {
        console.log(testService)
    }])
});