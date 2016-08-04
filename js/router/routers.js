/**
 * Created by sa on 16-8-3.
 */
define(["angular","../module/module","../controller/login"],function (angular,app) {
    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'html/login.html',
                    controller: 'loginController'
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
