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
            $urlRouterProvider.otherwise('/');
        }
    ]);
});