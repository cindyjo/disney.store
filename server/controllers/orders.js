var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');
module.exports = (function() {
	return {
		show: function(req, res){
			Order.find({}, function(err, results){
				if(err){
					console.log(err);
				}
				else {
					res.json(results);
				}
			});
		},

		add: function(req,res) {
			var order = new Order(req.body);

			Product.findOne({product_name: order.product_name}, function(err, product){
				if(product.product_qty >= order.qty){
					Product.update({product_name: order.product_name}, {product_qty: product.product_qty-=order.qty}, function(err, updated_prduct){
						if(err){
							res.json({success: false})
						}
						else {
							order.save(function(err){
								if(err){
									res.json(err);
								}
								else {
									res.json({success: true});
								}
							});
						}
					});
				}
				else {
					res.json({success: false, err_message: "ERROR!"});
				}
				console.log('product.qty_after',product.product_qty);
			})
			
			// console.log('order.qty' ,order.qty);
			// console.log('product.qty' ,product.product_qty);
			


			Product.find({}, function(err,results){
				// console.log('product', results);
			})
		}
	}
})();















