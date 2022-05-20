import Home from './home/Home';

const customerRoutes = [
	{
		url: '/',
		isExact: false,
		element: (match, history) => <Home match={match} history={history} />,
	},
];

export default customerRoutes;
