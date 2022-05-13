import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import MainAdmin from "./view/admin/page/MainAdmin";
import MainCustomer from "./view/customer/page/MainCustomer";

function App() {
    return (
        <Routes>
            <Route path="/admin" component={MainAdmin}/>
            <Route path="/" component={MainCustomer}/>
        </Routes>
    );
}

export default App;
