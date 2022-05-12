import {Component} from "react";
import MenuItem from "./MenuItem";
import {menuItems} from "./menuData";

class MenuSidebar extends Component {


    renderMenuItems = () => {
        return (
            menuItems.map((menuItem, index) => {
                return (
                    <MenuItem key={index} menuItem={menuItem}/>
                )
            })
        )
    }

    render() {
        return (
            <aside className="navbar-aside" id="offcanvas_aside">
                <div className="aside-top">
                    <a href="index.html" className="brand-wrap">
                        <img src="/assets/imgs/theme/logo.svg" className="logo" alt="Nest Dashboard"/>
                    </a>
                    <div>
                        <button className="btn btn-icon btn-aside-minimize">
                            <i className="text-muted material-icons md-menu_open"/>
                        </button>
                    </div>
                </div>
                <nav>
                    <ul className="menu-aside">
                        {this.renderMenuItems()}
                        {/*<li className="menu-item active">*/}
                        {/*    <a className="menu-link" href="index.html">*/}
                        {/*        <i className="icon material-icons md-home"/>*/}
                        {/*        <span className="text">Trang chủ</span>*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        {/*<li className="menu-item has-submenu">*/}
                        {/*    <a className="menu-link" href="page-products-list.html">*/}
                        {/*        <i className="icon material-icons md-shopping_bag"/>*/}
                        {/*        <span className="text">Danh mục</span>*/}
                        {/*    </a>*/}
                        {/*    <div className="submenu">*/}
                        {/*        <a href="page-products-list.html">Danh sách các danh mục</a>*/}
                        {/*        <a href="page-products-grid.html">Thêm danh mục</a>*/}
                        {/*    </div>*/}
                        {/*</li>*/}
                        {/*<li className="menu-item has-submenu">*/}
                        {/*    <a className="menu-link" href="page-orders-1.html">*/}
                        {/*        <i className="icon material-icons md-shopping_cart"/>*/}
                        {/*        <span className="text"> Đơn hàng</span>*/}
                        {/*    </a>*/}
                        {/*    <div className="submenu">*/}
                        {/*        <a href="page-orders-1.html"> Danh sách đơn hàng</a>*/}
                        {/*        <a href="page-orders-2.html"> Danh sách đơn hủy</a>*/}
                        {/*    </div>*/}
                        {/*</li>*/}
                        {/*<li className="menu-item has-submenu">*/}
                        {/*    <a className="menu-link" href="page-sellers-cards.html">*/}
                        {/*        <i className="icon material-icons md-store"/>*/}
                        {/*        <span className="text">Sản phẩm</span>*/}
                        {/*    </a>*/}
                        {/*    <div className="submenu">*/}
                        {/*        <a href="page-sellers-cards.html">Danh sách sản phẩm</a>*/}
                        {/*        <a href="page-sellers-list.html"> Thêm sản phẩm</a>*/}

                        {/*    </div>*/}
                        {/*</li>*/}

                        {/*<li className="menu-item has-submenu">*/}
                        {/*    <a className="menu-link" href="#">*/}
                        {/*        <i className="icon material-icons md-person"></i>*/}
                        {/*        <span className="text">Khách hàng</span>*/}
                        {/*    </a>*/}
                        {/*    <div className="submenu">*/}
                        {/*        <a href="page-account-login.html">Danh sách khách hàng</a>*/}
                        {/*        <a href="page-account-register.html">Cập nhật thông tin </a>*/}

                        {/*    </div>*/}
                        {/*</li>*/}

                        {/*<li className="menu-item">*/}
                        {/*    <a className="menu-link" href="page-brands.html"> <i*/}
                        {/*        className="icon material-icons md-stars"></i> <span className="text">Brands</span>*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        {/*<li className="menu-item">*/}
                        {/*    <a className="menu-link" disabled href="#">*/}
                        {/*        <i className="icon material-icons md-pie_chart"></i>*/}
                        {/*        <span className="text">Thống kê</span>*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                    </ul>
                </nav>
            </aside>

        );


    }


}

export default MenuSidebar;