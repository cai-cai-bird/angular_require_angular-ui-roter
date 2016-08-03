/**
 * Created by sa on 16-8-3.
 */
define(["../module/module","../service/testService"],function (app,testService) {

    app.controller("loginController",["$scope",function ($scope) {
        console.log(testService)
    }])
});