import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import MainAdmin from "./view/admin/page/MainAdmin";
import MainCustomer from "./view/customer/page/MainCustomer";

function App() {
    return (
        <Switch>
            <Route path="/admin" component={MainAdmin}/>
            <Route path="/" component={MainCustomer}/>
        </Switch>
    );
}

export default App;
