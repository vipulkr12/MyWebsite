// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/vipul', {
                templateUrl : 'about.html',
                controller  : 'aboutController'
            })
			
			.when('/vipul/:id', {
                templateUrl : 'about.html',
                controller  : 'aboutController'
            })
			
			.when('/china/:imageId', {
                templateUrl : 'pages/China.html',
                controller  : 'chinaController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'contact.html',
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', ['$scope', '$routeParams', function($scope, $routeParams) {
		$scope.itemList = ["India", "Thailand", "Srilanka", "Australia", "New Zealand", "China"];
    }]);

    scotchApp.controller('aboutController', ['$scope', '$routeParams', function($scope, $routeParams) {
        $scope.message = 'Look! I am an about page.' + $routeParams.id;
    }]);

    scotchApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
	
	scotchApp.controller('chinaController', ['$scope', '$routeParams', function($scope, $routeParams) {
        $scope.message = 'Contact us! JK. This is just a demo.',
		$scope.myBackgroundUrl = "pages/China_" + $routeParams.imageId + ".jpg";
    }]);
	