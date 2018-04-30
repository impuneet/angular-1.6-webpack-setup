// for loading styles we need to load main scss file
import styles from './styles/styles.scss';

// loading shared module
import './services/core.module';
// loading all module components
import './app.components';

const appModule = angular
	.module('demoapp', [
		// shared module
		'app.core',
		// 3rd party modules
		'ui.router',
		// application specific modules
		'app.header',
		'app.home',
		'app.headerauth',
		'app.user',
		'app.leads',
		'app.register',
		'app.dashboard'
	]);

	appModule.run(function ($rootScope) {
		$rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
			console.log('int to the statechange chart');
			console.log(toState);
		})
	});

export default appModule;
