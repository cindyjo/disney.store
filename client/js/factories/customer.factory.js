angular.module('app')
.factory('CustomerFactory', function($http){
	var factory ={};
	var customers = [];

	factory.getCustomers = function(callback) {
        $http.get('/customers').success(function(output){
            customers = output;
            callback(customers);
        })
    }

    factory.addCustomer = function(info, callback) {
    	$http.post('/customers', info).success(function(data){
             if(data.success){
                factory.getCustomers(callback);
            }else {
                callback(data);
            }
    	})
    }

    factory.removeCustomer = function(id, callback){
    	$http.delete('/customers/'+id).success(function(){
    		factory.getCustomers(callback);
    	});
    	callback(customers);
    }
	return factory;

})