import SingleMenuList from "../menu/SingleMenuList";

const Header = () => {
    return (
        <header className="header-area header-style-1 header-height-2">
            <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
                <div className="container">
                    <div className="header-wrap">
                        <div className="logo logo-width-1">
                            <a href="index.html"><img src="/assets/customer/imgs/theme/logo.svg" alt="logo"/></a>
                        </div>
                        <div className="header-right">
                            <div className="search-style-2">
                                <form action="src/components/layout/customer/layout/header/Header#">
                                    <input type="text" placeholder="Nhập tên sản phẩm"/>
                                </form>
                            </div>
                            <div className="header-action-right">
                                <div className="header-action-2">
                                    <div className="header-action-icon-2">
                                        <a className="mini-cart-icon" href="shop-cart.html">
                                            <img alt="Nest" src="/assets/customer/imgs/theme/icons/icon-cart.svg"/>
                                            {/*<span className="pro-count blue">2</span>*/}
                                        </a>
                                        <a href="shop-cart.html"><span className="lable">Giỏ hàng</span></a>
                                    </div>
                                    <div className="header-action-icon-2">
                                        <a href="page-account.html">
                                            <img className="svgInject" alt="Nest"
                                                 src="/assets/customer/imgs/theme/icons/icon-user.svg"/>
                                        </a>
                                        <a href="page-account.html"><span className="lable ml-0">Tài khoản</span></a>
                                        <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                                            <ul>
                                                <li>
                                                    <a href="page-login.html"><i
                                                        className="fi fi-rs-sign-out mr-10"/>Đăng xuất</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-bottom header-bottom-bg-color sticky-bar">
                <div className="container">
                    <div className="header-wrap header-space-between position-relative">
                        <div className="logo logo-width-1 d-block d-lg-none">
                            <a href="index.html"><img src="/assets/customer/imgs/theme/logo.svg" alt="logo"/></a>
                        </div>
                        <div className="header-nav d-none d-lg-flex">
                            <div className="main-categori-wrap d-none d-lg-block">
                                <a className="categories-button-active"
                                   href="src/components/layout/customer/layout/header/Header#">
                                    <span className="fi-rs-apps"></span> <span className="et"/> Tất cả danh mục
                                    <i className="fi-rs-angle-down"></i>
                                </a>
                                <div className="categories-dropdown-wrap categories-dropdown-active-large font-heading">
                                    <div className="d-flex categori-dropdown-inner">
                                        <ul>
                                            <li>
                                                <a href="shop-grid-right.html"> <img
                                                    src="assets/imgs/theme/icons/category-1.svg" alt=""/>Milks and
                                                    Dairies</a>
                                            </li>
                                            <li>
                                                <a href="shop-grid-right.html"> <img
                                                    src="assets/imgs/theme/icons/category-2.svg" alt=""/>Clothing &
                                                    beauty</a>
                                            </li>
                                            <li>
                                                <a href="shop-grid-right.html"> <img
                                                    src="assets/imgs/theme/icons/category-3.svg" alt=""/>Pet Foods &
                                                    Toy</a>
                                            </li>
                                            <li>
                                                <a href="shop-grid-right.html"> <img
                                                    src="assets/imgs/theme/icons/category-4.svg" alt=""/>Baking
                                                    material</a>
                                            </li>
                                            <li>
                                                <a href="shop-grid-right.html"> <img
                                                    src="assets/imgs/theme/icons/category-5.svg" alt=""/>Fresh Fruit</a>
                                            </li>
                                        </ul>
                                        <ul className="end">
                                            <li>
                                                <a href="shop-grid-right.html"> <img
                                                    src="assets/imgs/theme/icons/category-6.svg" alt=""/>Wines &
                                                    Drinks</a>
                                            </li>
                                            <li>
                                                <a href="shop-grid-right.html"> <img
                                                    src="assets/imgs/theme/icons/category-7.svg" alt=""/>Fresh
                                                    Seafood</a>
                                            </li>
                                            <li>
                                                <a href="shop-grid-right.html"> <img
                                                    src="assets/imgs/theme/icons/category-8.svg" alt=""/>Fast
                                                    food</a>
                                            </li>
                                            <li>
                                                <a href="shop-grid-right.html"> <img
                                                    src="assets/imgs/theme/icons/category-9.svg" alt=""/>Vegetables</a>
                                            </li>
                                            <li>
                                                <a href="shop-grid-right.html"> <img
                                                    src="assets/imgs/theme/icons/category-10.svg" alt=""/>Bread and
                                                    Juice</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="more_slide_open"
                                         style={{display: "none"}}>
                                        <div className="d-flex categori-dropdown-inner">
                                            <ul>
                                                <li>
                                                    <a href="shop-grid-right.html"> <img
                                                        src="assets/imgs/theme/icons/icon-1.svg" alt=""/>Milks and
                                                        Dairies</a>
                                                </li>
                                                <li>
                                                    <a href="shop-grid-right.html"> <img
                                                        src="assets/imgs/theme/icons/icon-2.svg" alt=""/>Clothing &
                                                        beauty</a>
                                                </li>
                                            </ul>
                                            <ul className="end">
                                                <li>
                                                    <a href="shop-grid-right.html"> <img
                                                        src="assets/imgs/theme/icons/icon-3.svg" alt=""/>Wines &
                                                        Drinks</a>
                                                </li>
                                                <li>
                                                    <a href="shop-grid-right.html"> <img
                                                        src="assets/imgs/theme/icons/icon-4.svg" alt=""/>Fresh
                                                        Seafood</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="more_categories"><span className="icon"></span> <span
                                        className="heading-sm-1">Show more...</span></div>
                                </div>
                            </div>

                            <SingleMenuList/>

                        </div>
                        <div className="header-action-icon-2 d-block d-lg-none">
                            <div className="burger-icon burger-icon-white">
                                <span className="burger-icon-top"></span>
                                <span className="burger-icon-mid"></span>
                                <span className="burger-icon-bottom"></span>
                            </div>
                        </div>
                        <div className="header-action-right d-block d-lg-none">
                            <div className="header-action-2">
                                <div className="header-action-icon-2">
                                    <a href="shop-wishlist.html">
                                        <img alt="Nest" src="assets/imgs/theme/icons/icon-heart.svg"/>
                                        <span className="pro-count white">4</span>
                                    </a>
                                </div>
                                <div className="header-action-icon-2">
                                    <a className="mini-cart-icon"
                                       href="src/components/layout/customer/layout/header/Header#">
                                        <img alt="Nest" src="assets/imgs/theme/icons/icon-cart.svg"/>
                                        <span className="pro-count white">2</span>
                                    </a>
                                    <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                        <ul>
                                            <li>
                                                <div className="shopping-cart-img">
                                                    <a href="shop-product-right.html"><img alt="Nest"
                                                                                           src="assets/imgs/shop/thumbnail-3.jpg"/></a>
                                                </div>
                                                <div className="shopping-cart-title">
                                                    <h4><a href="shop-product-right.html">Plain Striola Shirts</a>
                                                    </h4>
                                                    <h3><span>1 × </span>$800.00</h3>
                                                </div>
                                                <div className="shopping-cart-delete">
                                                    <a href="src/components/layout/customer/layout/header/Header#"><i
                                                        className="fi-rs-cross-small"></i></a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="shopping-cart-img">
                                                    <a href="shop-product-right.html"><img alt="Nest"
                                                                                           src="assets/imgs/shop/thumbnail-4.jpg"/></a>
                                                </div>
                                                <div className="shopping-cart-title">
                                                    <h4><a href="shop-product-right.html">Macbook Pro 2022</a></h4>
                                                    <h3><span>1 × </span>$3500.00</h3>
                                                </div>
                                                <div className="shopping-cart-delete">
                                                    <a href="src/components/layout/customer/layout/header/Header#"><i
                                                        className="fi-rs-cross-small"></i></a>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="shopping-cart-footer">
                                            <div className="shopping-cart-total">
                                                <h4>Total <span>$383.00</span></h4>
                                            </div>
                                            <div className="shopping-cart-button">
                                                <a href="shop-cart.html">View cart</a>
                                                <a href="shop-checkout.html">Checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;