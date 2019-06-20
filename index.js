var express= require('express');
var router= express.Router();
var ctrlregister= require('../controller/registercontroller.js');
router
 .route('/show')
 .get(ctrlregister.addOne)
 .put(ctrlregister.addOneupdate);

 router
 .route('/add')
 .post(ctrlregister.newAddone);
 router
 .route('/post')
 .post(ctrlregister.postform);

module.exports=router;