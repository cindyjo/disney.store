var mongoose = require('mongoose');
var Product = mongoose.model('Product');
module.exports = (function() {
	return {
		show: function(req, res){
			Product.find({}, function(err, results){
				if(err){
					console.log(err);
				}
				else {
					res.json(results);
				}
			});
		},

		add: function(req,res) {
			var product = new Product(req.body);
			product.save(function(err){
				if(err){
					// console.log(err);
					res.json(err);
				}
				else {
					res.json({success: true});
				}
			});
		}
	}
})();