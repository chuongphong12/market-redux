import MenuSidebar from "../layout/menu/MenuSidebar";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import {Route, Routes} from "react-router-dom";
import {routes} from "./routes";
import {ToastContainer} from "react-toastify";
import {loadCss, loadScript} from "../../../index";

function MainAdmin() {
    this.renderPages = function () {
        return routes.map((route, index) => {
            return (
                <Route key={index} path={route.url} exact={route.isExact} component={route.component}/>
            );
        })
    };

    loadCss(true);
    loadScript(true);

    return (
        <>
            <ToastContainer/>
            <div className="screen-overlay"/>
            <MenuSidebar/>
            <main className="main-wrap">
                <Header/>
                <section className="content-main">
                    <Routes>
                        {this.renderPages()}
                    </Routes>
                </section>
                <Footer/>
            </main>
        </>
    );

}

export default MainAdmin;
