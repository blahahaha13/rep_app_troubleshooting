// Set Up Mongo server
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/troubleshoot", { useNewUrlParser: true} );

// Model Exports

module.exports.Rep = require('./rep.js');

