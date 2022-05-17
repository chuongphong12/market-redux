import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AdminLayout } from "./components/layout";
import CustomerLayout from './components/layout/customer/Customer';

function App() {
	/* const pathname = window.location.pathname
        if (pathname.startsWith("/admin/")) {
            return <AdminLayout/>;
        } else {
            return <CustomerLayout/>;
        } */

    return (
        <Routes>
            <Route path="/admin" element={<AdminLayout/>}/>
            <Route path="/*" element={<CustomerLayout/>}/>
        </Routes>
    );
}

export default App;