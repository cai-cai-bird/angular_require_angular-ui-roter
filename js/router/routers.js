/**
 * Created by sa on 16-8-3.
 */
define(["angular","../module/module"],function (angular,app) {

    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('login', {
                    url: '/login',
                    view:{
                        templateUrl: 'html/login.html',
                        controller: 'loginController',
                    },
                    resolve: {
                        loginController: function($ocLazyLoad){
                            return $ocLazyLoad.load(
                                {
                                    name: "app",  //module name is "store"
                                    files: ["js/controller/login.js"]
                                }
                            )
                        }
                    }
                })
                .state('index', {
                    url: '/index',
                    templateUrl: 'html/index.html'
                })
                .state('index.list', {
                    url: 'list',
                    templateUrl: 'html/list.html'
                })
                .state('index.detail', {
                    url: 'detail/:id',
                    templateUrl: 'html/detail.html'
                })
            $urlRouterProvider.otherwise('/');
        }
    ]);
});
