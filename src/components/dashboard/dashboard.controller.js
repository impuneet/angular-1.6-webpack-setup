export default class DashboardController {
	
	full_name;
	phone;
	email;
	password;
	template;
	token;
	register;
	client_id;
	logintoken;
	user ;
	constructor(
		$log,
		userService
	) {
		'ngInject';
		this.$log = $log;
		this.full_name = localStorage.getItem('full_name')
		this.phone = localStorage.getItem('phone');
		this.email = localStorage.getItem('email');
		this.template = localStorage.getItem('template');
		this.client_id = localStorage.getItem('client_id');
		this.userService = userService;
		this.logintoken = localStorage.getItem('token');
	}

	$onInit = () => {

	/* 	if(localStorage.getItem('token')){

		}
		else{
			location.replace('http://localhost:3000/');
		} */

		this.userService.get().then((users) => {
			this.users = users;
		});
		this.$log.info('Activated User View.');
	};

	
    logout() {
		localStorage.clear();
		location.replace('http://localhost:3000/');
	}

	submitForm = function(isValid) {
		// check to make sure the form is completely valid
		this.register = {
			full_name : this.full_name,
			phone : this.phone,
			email : this.email,
			template : this.template
		}
		this.$log.info('Sending data to --- > ',this.register);
		this.token = this.full_name.replace(/\s+/g, '-').toLowerCase();
		
		this.userService.updateInfo(this.register,this.token,this.logintoken,this.client_id).then((res)=> {
				this.$log.info('response from service',res);
		},(err) => {
			alert("Error : ",err);
		})
		
	  };


}
