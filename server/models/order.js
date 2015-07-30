var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
  customer_name: { type: String},
  qty: { type: Number},
  product_name: { type: String},
  created_at: { type: Date, default: Date.now }
});

OrderSchema.path('customer_name').required(true, "Customer's name needs to be selected");
OrderSchema.path('qty').required(true, "Quantity needs to be selected");
OrderSchema.path('product_name').required(true, " Product needs to be selected");

mongoose.model('Order', OrderSchema);
