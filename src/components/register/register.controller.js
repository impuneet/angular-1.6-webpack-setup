export default class RegisterController {
	
	full_name;
	phone;
	email;
	password;
	template;
	token;
	register;
	constructor(
		$log,
		userService,
	) {
		'ngInject';
		this.$log = $log;
		this.heading = "Register--";
		this.userService = userService;
	}
	submitForm = function(isValid) {
		// check to make sure the form is completely valid
		this.$log.info('full_name',this.full_name);
		this.register = {
			full_name : this.full_name,
			phone : this.phone,
			email : this.email,
			password : this.password,
			template : this.template
		}

		this.token = this.full_name.replace(/\s+/g, '-').toLowerCase();
		
		this.userService.register(this.register,this.token).then((res)=> {
				location.replace('http://localhost:3000/');
		},(err) => {
			alert("Error : ",err);
		})
		
	  };

    $onInit = () => {
		this.userService.get().then((users) => {
			this.users = users;
		});

		this.$log.info('Activated User View.');
	};
	
	
}