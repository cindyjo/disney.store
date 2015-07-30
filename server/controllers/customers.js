var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function() {
	return {
		show: function(req, res){
			Customer.find({}, function(err, customers){
				if(err){
					res.json(err);
				}else {;
					res.json(customers)
				}
			})
		},

		add: function(req,res){
			var customer = new Customer(req.body);
			customer.save(function(err){
				if(err) {
					if(11000 ===err.code){
						err= {err_unique: "Name needs to be unique"};
					}
					res.json(err);
				}
				else {
					res.json({success: true})	
				}
			})
		},

		remove: function(req, callback){
			console.log(req);
			Customer.remove({_id: req}, function(err){
				if(err){
					console.log('something went wrong');
				}
				else {
					callback({success: true})
				}
			})
		}
	}
})();