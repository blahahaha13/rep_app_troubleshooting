const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RepSchema = new Schema ({
	repName: String,
	address: String,
	party: String,
	phoneNumber: String,
	photoURL: String,
	url: String,
});

const Rep = mongoose.model('Rep', RepSchema);

module.exports = Rep;