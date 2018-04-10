export default class UserService {
	constructor(
		$http
	) {
		'ngInject';

		this.$http = $http;
	}

	register = (data,token) => {
		console.log('in to the service');
		return this.$http.post('http://192.34.78.153:5000/clients/',data,
		{
			headers: {
				"X-Api-Token": token
			}
		}).then((response) => {
			
			return response;
		},(err) => {
			return err;
		});
	}

	login = (data,token) => {
		return this.$http.post('http://192.34.78.153:5000/clients/login/',data,{
			headers: {
				"X-Api-Token": token
			}
		}).then((response) => {
			console.log('response',response);
			return response;
		},(err) => {
			return err;
		});
	}

	getLeads = (apitoken,token) => {
		return this.$http.get('http://192.34.78.153:5000/leads/',{
			headers: {
				"X-Api-Token": apitoken,
				"X-Login-Token" : token,
				"Content-Type" : "application/json"				
			}
		}).then((response) => {
			return response;
		},(err) => {
			return err;
		});
	}


	updateInfo = (data,apitoken,token,client_id) => {
		return this.$http.put('http://192.34.78.153:5000/clients/'+client_id+'/',data,
		{
			headers: {
				"X-Api-Token": apitoken,
				"X-Login-Token" : token,
				"Content-Type" : "application/json"
			}
		}).then((response) => {
			return response;
		});
	}



	get = () => {
		return this.$http.get('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				return response.data;
			});
	};
}
