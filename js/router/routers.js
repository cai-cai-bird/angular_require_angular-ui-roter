/**
 * Created by sa on 16-8-3.
 */
define(["../module/module"],function (app) {
    app.config(['$stateProvider', '$urlRouterProvider','$requireProvider',
        function($stateProvider, $urlRouterProvider,$requireProvider) {
            var requireJS = $requireProvider.requireJS;
            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'html/login.html',
                    controller: 'loginController',
                    resolve: {
                        deps: requireJS([
                            'js/controller/loginController.js'
                        ])
                    }
                })
                .state('index', {
                    url: '/index',
                    templateUrl: 'html/index.html'
                })
                .state('index.list', {
                    url: 'list',
                    templateUrl: 'html/list.html',
                    resolve: {
                        deps: requireJS([
                            'js/controller/listController.js'
                        ])
                    }
                })
                .state('index.detail', {
                    url: 'detail/:id',
                    templateUrl: 'html/detail.html',
                    resolve: {
                        deps: requireJS([
                            'js/controller/detailController.js'
                        ])
                    }
                })
            $urlRouterProvider.otherwise('/login');
        }
    ]);
});
