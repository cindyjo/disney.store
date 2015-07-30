angular.module('app')
.factory('ProductFactory', function($http){
	var factory ={};
	var products = [];

    var qty = [];

    for (var i=1; i<20; i++){
        qty.push({qty: i});
    }

    factory.getQty = function(callback){
        callback(qty);
    }
    
	factory.getProducts = function(callback) {
        $http.get('/products').success(function(output){
            products = output;
            callback(products);
        })
    }

    factory.addProduct = function(info, callback) {
        $http.post('/products', info).success(function(data){
            if(data.success){
                factory.getProducts(callback);
            }else {
                callback(data);
            }
    	})
    }
	return factory;
})