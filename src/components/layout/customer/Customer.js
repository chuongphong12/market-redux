import { Route,Routes } from "react-router-dom";
import customerRoutes from '../../../features/customer/page/routes';
import { loadCss,loadScript } from "../../../index";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";

function CustomerLayout() {

	const renderPages = () => {
		return customerRoutes.map((route, index) => {
				return (
						<Route key={index} path={route.url} exact={route.isExact} element={route.element}/>
				);
		})
}

	loadCss(false);
	loadScript(false);
	return (
			<>
				<Header/>
				<main className="main">
					<Routes>
						{renderPages()}
					</Routes>
				</main>
				<Footer/>
			</>
	
	);
}

export default CustomerLayout;