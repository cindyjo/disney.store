angular.module('app')
.controller('ordersController', function(OrderFactory){
	var that = this;

	OrderFactory.getOrders(function(data){
		that.orders = data;
	});

	this.addOrder = function(){
		that.err = {};
		console.log("orders.ctr.js-outer-this.newOrder",this.newOrder);
		OrderFactory.addOrder(this.newOrder, function(data){
			console.log("orders.ctr.js-inner-data",data);
			if(data.errors){
				for(var name in data.errors){
					that.err[name] = data.errors[name].message;
				}
			}
			else {
				that.orders= data;
				that.newOrder ={};
			}
		});
	};
})