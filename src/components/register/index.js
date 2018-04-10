
import registerComponent from './register.component';

const registerModule = angular.module('app.register', []);

// loading components, services, directives, specific to this module.
registerModule.component('register', registerComponent);

// export this module
export default registerModule;
