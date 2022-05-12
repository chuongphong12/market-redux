
import {Component} from "react";
import {bindActionCreators, compose} from "redux";
import * as categoryAction from "../../../service/admin/action/categoryAction";
import {connect} from "react-redux";
import CategoryTable from "../page/category/CategoryTable";

class CategoryTableContainer extends Component {

    render() {


        let {categories, categoryAction, match, history} = this.props;

        return (
            <CategoryTable match={match} history={history}
                           categories={categories}
                           categoryAction={categoryAction}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        categoryAction: bindActionCreators(categoryAction, dispatch)
    }
}

const store = connect(mapStateToProps, mapDispatchToProps);


export default compose
(store)
(CategoryTableContainer);
