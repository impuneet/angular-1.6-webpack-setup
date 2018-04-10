export default class UserController {
	constructor(
		$log,
		userService
	) {
		'ngInject';
		this.$log = $log;
		this.userService = userService;
	}

	$onInit = () => {
		this.userService.get().then((users) => {
			this.users = users;
		},(err) => {
			alert("Error : ",err);
		});

		this.$log.info('Activated User View.');
	};

	hello() {
		this.$log.info('Activated User View.');
	}
}
