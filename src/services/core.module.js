import routerHelperService from './router-helper/router-helper.service';
import userService from './user/user.service';

const coreModule = angular.module('app.core', [
	'ui.router'
]);

coreModule.config(routerHelperService);
coreModule.config(['$httpProvider', function($httpProvider) {
	$httpProvider.defaults.withCredentials = true;
  }])

coreModule.service('userService', userService);



export default coreModule;
