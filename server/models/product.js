var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  product_name: {type: String},
  product_url: {type: String},
  product_description: {type: String},
  product_qty: {type: Number}
});

// CustomerSchema.path('name').required(true, "Name is required").unique(true);

mongoose.model('Product', ProductSchema);