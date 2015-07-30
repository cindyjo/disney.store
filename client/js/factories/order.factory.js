angular.module('app')
.factory('OrderFactory', function($http) {
	var factory = {};

	var orders = [];
	
	factory.getOrders = function(callback){
		$http.get('/orders').success(function(output){
			orders = output;
			callback(orders);
		});
	};
	
	factory.addOrder = function(info, callback){
		console.log('order.factory.js-addOrder-outer-info', info)
		$http.post('/orders', info).success(function(data){
			console.log('order.factory.js-http.post', data)
			if(data.success){
				factory.getOrders(callback);

			}else {
				callback(data);
			}
		});
		factory.getOrders(callback);
	};

	return factory;
})













