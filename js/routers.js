var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('', '/index');
    $stateProvider
        // .state('index', {
        //     url: '/index',
        //     views: {
        //         '': {
        //             templateUrl: 'tpls/home.html'
        //         },
        //         'main@index': {
        //             templateUrl: 'tpls/login.html'
        //         }
        //     }
        // })
        .state('index', {
            url: '',
            views: {
                '': {
                    templateUrl: 'tpls/home.html'
                },
                'main@index': {
                    templateUrl: 'tpls/login.html'
                }
            }
        })
        .state('home', {
            url: '/home',
            views: { //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
                '': {
                    templateUrl: 'tpls/home.html'
                },
                'main@home': {
                    templateUrl: 'tpls/header.html'
                },
                'main1@home': {
                    templateUrl: 'tpls/city.html'
                },
                'main2@home': {
                    templateUrl: 'tpls/settop.html'
                }
            }
        })
        .state('header.refresh',{
            url:'/refresh',
            templateUrl:'tpls/refresh.html'
        })
        .state('header.settop',{
            url:'/settop',
            templateUrl:'tpls/settop.html'
        })
        .state('header.carsInfo',{
            url:'/carsInfo',
            templateUrl:'tpls/carsInfo.html'
        })
        // .state('childs', {
        //     url: '/childs',
        //     views: { //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
        //         '': {
        //             templateUrl: 'tpls/refresh.html'
        //         },
        //         'child1@childs': {
        //             templateUrl: 'tpls/refresh.html'
        //         },
        //         'child2@childs': {
        //             templateUrl: 'tpls/settop.html'
        //         },
        //         'child3@childs': {
        //             templateUrl: 'tpls/carsInfo.html'
        //         }
        //     }
        // })

})