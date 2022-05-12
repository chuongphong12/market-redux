import {Component} from "react";
import Header from "../layout/header/Header";
import {loadCss, loadScript} from "../../../index";
import HomeProductRow from "./home/product/HomeProductRow";
import Footer from "../layout/footer/Footer";

class MainCustomer extends Component {

    render() {
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
        )
    }
}

export default MainCustomer;