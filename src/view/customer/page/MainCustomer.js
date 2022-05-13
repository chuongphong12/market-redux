import Header from "../layout/header/Header";
import {loadCss, loadScript} from "../../../index";
import HomeProductRow from "./home/product/HomeProductRow";
import Footer from "../layout/footer/Footer";

function MainCustomer() {
    loadCss(false);
    loadScript(false);
    return (
        <>
            <Header/>
            <main className="main">
                <HomeProductRow/>
            </main>
            <Footer/>
        </>

    );
}

export default MainCustomer;