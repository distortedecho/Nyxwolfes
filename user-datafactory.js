angular.module('users').factory('usersdatafactory', usersdatafactory);
function usersdatafactory($http){
	return{
		userlist : userlist,
		postReview: postReview
	};
	function userlist(){
		return $http.get('/csiakgec/show').then(complete).catch(failed);
	}
	function postReview(Status){
        return $http.post('/csiakgec/add', Status).then(complete).catch(failed);
	} 
	function complete(response){
		return response;
	}
	function failed(error){
		console.log(error.statustext);
	}
}