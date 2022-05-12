import {Component} from "react";
import {Link} from "react-router-dom";

class HomeProductItem extends Component {

    render() {

        let {product} = this.props;

        return (
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap wow animate__animated animate__fadeIn"
                     data-wow-delay=".1s">
                    <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                                <img className="default-img" src={product.firstImageUrl} alt=""/>
                                <img className="hover-img" src={product.firstImageUrl} alt=""/>
                            </a>
                        </div>
                        <div className="product-action-1">
                            <a aria-label="Add To Wishlist" className="action-btn"
                               href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                            <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i
                                className="fi-rs-shuffle"/></a>
                            <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal"
                               data-bs-target="#quickViewModal"><i className="fi-rs-eye"/></a>
                        </div>
                    </div>
                    <div className="product-content-wrap">
                        <h2>
                            <Link to="#">{product.name}</Link>
                        </h2>
                        <div>
                            <span className="font-small text-muted">
                                <Link to="#">{product.brandName}</Link>
                            </span>
                        </div>
                        <div className="product-card-bottom">
                            <div className="product-price">
                                <span>{product.priceFormat} đ</span>
                                {/*<span className="old-price">$55.8</span>*/}
                            </div>
                            <div className="add-cart">
                                <a className="add" href="shop-cart.html"><i
                                    className="fi-rs-shopping-cart mr-5"/>Chọn mua</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default HomeProductItem;
