import Home from "./home/Home";

const routes = [
    {
        url: "/home",
        isExact: false,
        component: ({match, history}) => <Home match={match} history={history}/>,
    },
];

export default routes;