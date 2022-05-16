import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {CustomerLayout} from "./components/layout";
import {NotFound} from "./components/common";

function App() {
	return (
			<Routes>
				<Route path="/" element={<CustomerLayout/>}/>
				<Route element={<NotFound/>}/>
			</Routes>
	);
}

export default App;
