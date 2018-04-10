export default class HomeController {

	email;
	password;
	token;
	login;
	obj;
	constructor($log,userService,$location,$window) {
		'ngInject';
		this.$log = $log;
		this.userService = userService;
		this.$location = $location;
		this.$window = $window;
	}

	$onInit = () => {
		this.heading = 'Welcome';
		this.$log.info('Activated Home View.');
	};

	submitForm = function(isValid) {
		// check to make sure the form is completely valid
		this.$log.info('full_name',this.email);
		this.$log.info('full_name',isValid);
		this.login = {
			email : this.email,
			password : this.password,
		}
		//static token because here we are not asking for the Username
		this.token = 'abc-xyz';
		this.userService.login(this.login,this.token).then((res)=> {
			console.log(res.data.error);
				if(res.status == 200){
					this.$log.info('response from service',res);
					if(res.status == 200 && res.statusText == "OK"){
						localStorage.setItem('token',res.data.token);
						const obj = {
							full_name : res.data.full_name,
							email : res.data.email,
							phone : res.data.phone,
							password : res.data.password,
							template : res.data.template
						}
						localStorage.setItem('full_name',obj.full_name);
						localStorage.setItem('email',obj.email);
						localStorage.setItem('phone',obj.phone);
						localStorage.setItem('template',obj.template);
		/* 				
						$cookies.put('token', res.data.token);
						$cookies.put('X-Login-Token', res.data.token); */

						localStorage.setItem('client_id',res.data.client_id);
						location.replace('http://localhost:3000/dashboard');
					}	
				}
				else if(res.status == 400){
					alert(res.data.error);
				}
				else{
					alert("Error in logged in....");
				}
			
		},(err) => {
			alert("Error : ",err);
		})
	  };
}
