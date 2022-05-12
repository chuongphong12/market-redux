import {Component} from "react";
import {bindActionCreators, compose} from "redux";
import * as categoryMenuAction from "../../../../service/customer/action/categoryMenuAction";
import {connect} from "react-redux";
import SingleMenuItem from "./SingleMenuItem";

class SingleMenuList extends Component {


    componentDidMount() {
        let {categoryMenuAction} = this.props;
        categoryMenuAction.fetchFindAll();
    }

    renderSingleMenuItem = () => {
        let {customerCategories} = this.props;
        return customerCategories.slice(0, 8).map((item, index) => {
            return (
                <SingleMenuItem key={index} singleMenuItem={item}/>
            )
        })
    }

    render() {
        return (
            <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                <nav>
                    <ul>
                        {this.renderSingleMenuItem()}
                    </ul>
                </nav>
            </div>
        )
    }


}

const mapStateToProps = state => {
    return {
        customerCategories: state.customerCategories
    }
}

// thật ra đúng mô hình có container nữa
// cái này nằm ben container nhung h t bỏ vo day lun
// them container nua dài dữ lắm mệt xĩu

const mapDispatchToProps = dispatch => {
    return {
        categoryMenuAction: bindActionCreators(categoryMenuAction, dispatch)
    }
}

const store = connect(mapStateToProps, mapDispatchToProps);

export default compose
(store)
(SingleMenuList);