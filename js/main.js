/**
 * Created by sa on 16-8-3.
 */
require.config({
    baseUrl:"./js",
    paths:{
        "angular":"../bower_components/angular/angular",
        "uiRouter":"../bower_components/angular-ui-router/release/angular-ui-router",
        "ngRequire":"../bower_components/angular-require/angular-require",
        "css":"../bower_components/require-css/css.min"
    },
    shim:{
        "angular":{
            exports:"angular"
        },
        "uiRouter":{
            deps:["angular"]
        },
        "ngRequire":{
            deps:["angular"]
        },
        "requireCss":{
            deps:["require"]
        }
    }
});
require(["angular","uiRouter","ngRequire","css","./router/routers"],function (angular) {
    angular.element(document).ready(function () {
        angular.bootstrap(document,["app"]);
    })
})

