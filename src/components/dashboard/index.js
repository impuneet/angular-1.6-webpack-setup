import dashboardComponent from './dashboard.component';

const dashboardModule = angular.module('app.dashboard', []);

// loading components, services, directives, specific to this module.
dashboardModule.component('dashboard', dashboardComponent);

// export this module
export default dashboardModule;
