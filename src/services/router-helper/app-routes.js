export default [
	{
		name: 'home',
		url: '/',
		component: 'home',
			requireLogin: false
	},
	{
		name: 'user',
		url: '/user',
		component: 'user',

			requireLogin: false
	
	},
	{
		name: 'register',
		url: '/register',
		component: 'register',
			requireLogin: false

	},
	{
		name: 'dashboard',
		url: '/dashboard',
		component: 'dashboard',

			requireLogin: true

	},
	{
		name: 'leads',
		url: '/leads',
		component: 'leads',
		
			requireLogin: true

	}
];
