import {loadCss, loadScript} from "../../../index";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Home from "../../../features/customer/page/home/Home";

export function CustomerLayout() {
	loadCss(false);
	loadScript(false);
	return (
			<>
				<Header/>
				<main className="main">
					<Home/>
				</main>
				<Footer/>
			</>
	
	);
}