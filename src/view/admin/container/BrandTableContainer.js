import {Component} from "react";
import {bindActionCreators, compose} from "redux";
import  * as brandAction from "../../../service/admin/action/brandAction";
import {connect} from "react-redux";
import BrandTable from "../page/brand/BrandTable";
import * as categoryAction from "../../../service/admin/action/categoryAction";

class BrandTableContainer extends Component {
    render() {
        let {brands, brandAction, match, history} = this.props;
        return(
            <BrandTable match = {match} history = {history}
                        brands = {brands}
                        brandAction = {brandAction}/>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        brands : state.brands
    }
}

const mapDispatchToProps = dispatch => {
    return {
        brandAction: bindActionCreators(brandAction, dispatch)
    }
}

const store = connect(mapStateToProps, mapDispatchToProps);

export default compose
(store)
(BrandTableContainer);