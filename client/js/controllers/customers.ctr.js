angular.module('app')
.controller('customersController', function(CustomerFactory){
	this.customers = [];	
	var that = this;

	CustomerFactory.getCustomers(function(data){
		that.customers = data;
	});

	this.addCustomer = function() {
		this.err = {};

		CustomerFactory.addCustomer(this.newCustomer, function(data){
			
			if(data.errors){
				for(name in data.errors){
					that.err[name] = data.errors[name].message;
				}
			}else if(data.err_unique)
			{
				that.err['uniqueErr'] = data.err_unique;
			}		
			else{
				that.customers = data;
			}
			that.newCustomer = {};
		});
	};

	this.removeCustomer = function(customer){
		CustomerFactory.removeCustomer(customer._id, function(data){
			that.customers = data;
		});
	};
})