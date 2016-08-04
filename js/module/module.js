/**
 * Created by sa on 16-8-3.
 */
define(["angular","uiRouter","ocLazyLoad","../controller/controllerModule","../service/serviceModule","../directive/directiveModule","../filter/filterModule"],function (angular) {
    var app=angular.module("app",['ui.router',"controllerModule","serviceModule","directiveModule","filterModule"]);
    return app;
});
