/**
 * Created by sa on 16-8-3.
 */
define(["../module/module"],function (app) {

    app.controller("loginController",["$scope",function ($scope,testService) {
        console.log(testService)
    }])
});