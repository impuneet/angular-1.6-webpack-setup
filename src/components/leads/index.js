import leadsComponent from './leads.component';

const leadsModule = angular.module('app.leads', []);

// loading components, services, directives, specific to this module.
leadsModule.component('leads', leadsComponent);

// export this module
export default leadsModule;
