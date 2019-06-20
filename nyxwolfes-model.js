var mongoose = require('mongoose');
var UserdataSchema= new mongoose.Schema({
	Name: 
	{
		type: String,
		required: true
	},
	Status:{
		type: String,
		required: true
	}
});
mongoose.model('nyxwolfmodel', UserdataSchema,'users');