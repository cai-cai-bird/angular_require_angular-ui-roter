/**
 * Created by sa on 16-8-3.
 */
require.config({
    baseUrl:"./js",
    paths:{
        "angular":"../bower_components/angular/angular.min",
        "uiRouter":"../bower_components/angular-ui-router/release/angular-ui-router.min",
        "ocLazyLoad":"../bower_components/oclazyload/dist/ocLazyLoad.min"
    },
    shim:{
        "angular":{
            exports:"angular"
        },
        "uiRouter":{
            deps:["angular"]
        },
        "ocLazyLoad":{
            deps:["angular"]
        }
    }
});
require(["angular","./router/routers"],function (angular) {
    angular.element(document).ready(function () {
        angular.bootstrap(document,["app"]);
    })
})

