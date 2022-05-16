import {Navigate, Route} from "react-router-dom";

export function PrivateRoute(props) {
    const isLogin = Boolean(localStorage.getItem('token'));

    if (isLogin) {
        return <Route {...props} />
    } else {
        return <Navigate replace to="/login"/>
    }
}