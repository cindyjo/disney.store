var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  name: { type: String},
  created_at: { type: Date, default: Date.now }
});

CustomerSchema.path('name').required(true, "Name is required").unique(true);

mongoose.model('Customer', CustomerSchema);