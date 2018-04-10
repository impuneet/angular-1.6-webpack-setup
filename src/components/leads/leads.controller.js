export default class LeadsController {


    token;
    apitoken;
    leads;
    constructor(
		$log,
		userService
	) {
		'ngInject';
        this.$log = $log;
        this.token = localStorage.getItem('token');
        this.apitoken = 'james-bond';
		this.userService = userService;
	}

    $onInit = () => {
        if(localStorage.getItem('token')){

		}
		else{
			location.replace('http://localhost:3000/');
        }
        
        this.apitoken = 'james-bond';
        this.token = localStorage.getItem('token');
		this.userService.get().then((users) => {
			this.users = users;
        });
        
        this.userService.getLeads(this.apitoken,this.token).then((leads) => {
            this.leads = leads;
            this.$log.info(this.leads);
        },(err) => {
            alert("Error : ",err);
        });

		this.$log.info('Activated User View.');
    };
    
    logout() {
        localStorage.clear();
        location.replace('http://localhost:3000/');
	}
}