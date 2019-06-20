var mongoose= require('mongoose');
var wolfmodel = mongoose.model('nyxwolfmodel');
var registrationsdatajson= require('../database/userdata.json');
const sendMail =require('./mail.js');
module.exports.addOne= function(req,res){ 
	wolfmodel
	 .find()
	
	 //.skip(offset)
	 //.limit(count)
	 .exec(function(err,doc){
	 	console.log("Found data",doc.length);
	 	res
	 	.json(doc);
	 });
	};
	 module.exports.newAddone=function(req,res){
         wolfmodel
		.create({
			Name: req.body.Name,
			Status: req.body.Status
		}, function(err,wolfmodel){
			if(err){
				console.log('Error creating data');
				res
				.status(400)
				.json(err);
			}else{
				console.log("data created",wolfmodel);
				res
				.status(200)
				.json(wolfmodel);
			 }
			})
	};
	module.exports.addOneupdate=function(req,res){
	 wolfmodel
	 .find()
	 .exec(function(err,doc){
	 	var response ={
	 		status:200,
	 		message: doc
	 	};
	 	if(err){
	 		console.log("Error finding data");
	 		response.status=500;
	 		response.message=err;
	 	}else if (!doc) {
	 		response.status=404;
	 		response.message={
	 			"message":"data not found"
	 		};
	 	}
	 	if(response.status!==200){
	 		res
	 		.status(response.status)
	 		.json(response.message);
	 	}else{
	 		doc.name=req.body.name;
	 		doc.status=req.body.status;
	 	}
	 });
	}
	module.exports.postform=function(req,res){
		const {subject, email, text}=req.body;
		console.log(req.body);
		sendMail(email,subject,text, function(err,data){
			if(err){
				res
				.status(500).json({message:'Internal error'});
			}else{
				console.log('this has been sent  by user!');
			}
		});
	};
	