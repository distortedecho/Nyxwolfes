angular.module('users').controller('usersController', usersController);
 function usersController(usersdatafactory){
 	var vm=this;
 	vm.title='NYXWOLF BASIC USER PORTAL';
 	vm.isSubmitted=false;
    usersdatafactory.userlist().then(function(response) {
    	vm.users = response.data;
    });

  vm.addReview= function(){
    	var postData= {
    		Name: vm.Name,
    		Status: vm.Status
    	};
    	 if(vm.myform.$valid){
    		usersdatafactory.postReview(postData).then(function(response){
                 if(response.status===200){
                 	$route.reload();
                 }
    		}).catch(function(error){
    			console.log(error);
    		});
    	   }
    	   else{
    			vm.isSubmitted=true;
    			console.log('isSubmitted is true');
    		}
    	};
 }
 queryfunction= function(){
$('form').on('submit', (e)=>{
		e.preventDefault();
		const email=$('#email').val().trim();
		const subject=$('#subject').val().trim();
		const text=$('#text').val().trim();
		const data={
			email,
			subject,
			text
		};
		$.post('/csiakgec/post', data,function(){
			console.log('server recieved our data');
		});
	});;
}
jsfun=function(){
	document.getElementsById('buttonid').disbaled=true;
};
