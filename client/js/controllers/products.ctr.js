angular.module('app')
.controller('productsController', function(ProductFactory){
	this.products = [];	
	var that = this;
	var qty = [];

	for (var i=1; i<=20; i++){
		qty.push({qty: i});
	}

	ProductFactory.getProducts(function(data){
		that.products = data;
	});

	ProductFactory.getQty(function(data){
		that.qty = data;
	})

	this.addProduct = function() {
		this.err = {};
		ProductFactory.addProduct(this.newProduct, function(data){
			if(data.errors){
				for(name in data.errors){
					that.err[name] = data.errors[name].message;
				}
			}else if(data.err_unique)
			{
				that.err['uniqueErr'] = data.err_unique;
			}		
			else{
				that.products = data;
			}
			that.newProduct = {};
		});
	};
})