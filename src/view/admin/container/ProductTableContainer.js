import {Component} from "react";
import ProductTable from "../page/product/ProductTable";
import {connect} from "react-redux";
import {bindActionCreators, compose} from "redux";
import * as productAction from "../../../service/admin/action/productAction";


class ProductTableContainer extends Component {
    render() {

        let {products, productAction, match, history} = this.props;

        return (<ProductTable match={match} history={history}
                              products={products}
                              productAction={productAction}/>
        );
    }

}


const mapStateToProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = dispatch => {
    return {
        productAction: bindActionCreators(productAction, dispatch)
    }
}

const store = connect(mapStateToProps, mapDispatchToProps);


export default compose
(store)
(ProductTableContainer);