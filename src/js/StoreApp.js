(function() {
	var data = [
		{
			name : 'Bull Terrier', 
			price : 122.5,
			model : 'Kolly 879-GRAFITE',
			available : false,
            quantity: 0,
            image : "img/Kolly 879-GRAFITE.jpg",
            reviews : [
                {
                    author: "grace@bol.com",
                    message: "Until now, I have good experience with it",
                    stars : 5
                }
            ]
		},
		{
			name : 'Bull Terrier', 
			price : 182.90,
			model : 'Fanny 1230-CONCRETO',
			available : true,
            quantity: 100,
            image : "img/Fanny 1230-CONCRETO.jpg",
            reviews : [
                {
                    author: "brb@gmail.com",
                    message: "Don't be so evil",
                    stars : 1
                }
            ]
		},
		{
			name : 'Bull Terrier', 
			price : 85.5,
			model : 'Fanny 1232-Mustang',
			available : true,
            quantity: 1,
            image : "img/Fanny 1232-Mustang.jpg",
            reviews : [
                {
                    author: "lana.ferris@gmail.com",
                    message: "Beautiful",
                    stars : 4
                }
            ]
		},
		{
			name : 'Bull Terrier', 
			price : 99.78,
			model : 'Tagg Low 2-Preto',
			available : true,
            quantity: 59,
            image : "img/Tagg Low 2-Preto.jpg",
            reviews : [
                {
                    author: "joster@gmail.com",
                    message: "The choosen one",
                    stars : 5
                }
            ]
		}
	];

    var storeApp = angular.module('storeApp', []);

	storeApp.controller("StoreController", function($scope) {
		this.products = data;

        $scope.numLimit = data.length;
        $scope.amount = 0.0;
        $scope.count = 0;

        this.buy = function(item) {
            $scope.amount += item.price;
            $scope.count++;

            item.quantity--;

            if (item.quantity == 0) {
                item.available = false;
            };
        };
	});

    storeApp.controller("PanelController", function() {
        this.panel = 1;

        this.selectPanel = function(setPanel) {
            this.panel = setPanel;
        };

        this.isSelected = function(checkPanel) {
            return this.panel === checkPanel;
        };
    });

    storeApp.controller('ReviewController', function(){
       this.review = [];

        this.addReview = function(product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = [];
        };
    });

    storeApp.directive('productDetailsTab', function() {
        return {
            restrict : 'E',
            templateUrl : 'templates/product-details-tab.html'
        };
    });

    storeApp.directive('productSpecsTab', function() {
        return {
            restrict : 'E',
            templateUrl : 'templates/product-specs-tab.html'
        };
    });

    storeApp.directive('productReviewsTab', function() {
        return {
            restrict : 'E',
            templateUrl : 'templates/product-reviews-tab.html',
            controller : function() {
                this.review = [];

                this.addReview = function(product) {
                    this.review.createdOn = Date.now();
                    product.reviews.push(this.review);
                    this.review = [];
                };
            },
            controllerAs : 'reviewCtrl'
        };
    });

})();