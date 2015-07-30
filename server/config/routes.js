module.exports = function(app) {
// Customers	
  	var customers = require('../controllers/customers.js');
    // Show
	app.get('/customers', function(req, res) { 
		customers.show(req,res);
	});
	// Add
	app.post('/customers', function(req, res) { 
		customers.add(req, res);
	});
	// remove
	app.delete('/customers/:id', function(req, res){
		customers.remove(req.params.id, function(err, data){
			if(err){
				console.log(err);
			}
			res.json(data);
		});
	})

// Orders
	var orders = require('../controllers/orders.js');
	// Show
	app.get('/orders', function(req, res){
		orders.show(req,res);
	});
	// Add
	app.post('/orders', function(req, res){
		orders.add(req,res);
	});

// Products
	var products = require('../controllers/products.js');
	// Show
	app.get('/products', function(req, res){
		products.show(req,res);
	});
	// Add
	app.post('/products', function(req, res){
		products.add(req,res);
	});
	
// WILDCARD Redirect to Mask unused urls.
	app.get('/*', function(request, response){
		response.redirect('/')
	})
	app.post('/*', function(request, response){
		response.redirect('/')
	})

}