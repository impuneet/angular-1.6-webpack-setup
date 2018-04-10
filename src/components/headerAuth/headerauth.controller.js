export default class HeaderauthController {

	constructor($log) {
		'ngInject';
        this.$log = $log;
		this.template = localStorage.getItem('template');        
		this.templating = {
			"background-color" : localStorage.getItem('template'),
		}
	}


	    $onInit = () => {
		    this.$log.info('Activated Home View.');
	};


}
