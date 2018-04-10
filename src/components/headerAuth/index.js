import headerauthComponent from './headerauth.component';

const headerauthModule = angular.module('app.headerauth', []);

// loading components, services, directives, specific to this module.
headerauthModule.component('appHeaderauth', headerauthComponent);

// export this module
export default headerauthModule;
