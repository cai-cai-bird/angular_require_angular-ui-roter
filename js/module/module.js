/**
 * Created by sa on 16-8-3.
 */
define(["angular","uiRouter","ocLazyLoad","../controller/controllerModule","../service/serviceModule","../directive/directiveModule","../filter/filterModule"],function (angular) {
    var app=angular.module("app",['ui.router',"oc.lazyLoad","controllerModule","serviceModule","directiveModule","filterModule"]);
    app.config(['$ocLazyLoadProvider',function($ocLazyLoadProvider){
        $ocLazyLoadProvider.config({
            loadedModules: ['app'],//主模块名,和ng.bootstrap(document, ['monitorApp'])相同
            jsLoader: requirejs, //使用requirejs去加载文件
            files: ['ui.router',"oc.lazyLoad","controllerModule","serviceModule","directiveModule","filterModule"], //主模块需要的资源，这里主要子模块的声明文件
            debug: true
        });
    }]);
    return app;
});
