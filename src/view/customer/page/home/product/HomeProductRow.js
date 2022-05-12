import {Component, Fragment} from "react";
import HomeProductItem from "./HomeProductItem";
import {bindActionCreators, compose} from "redux";
import * as categoryMenuAction from "../../../../../service/customer/action/categoryMenuAction";
import {connect} from "react-redux";
//import * as categoryAction from "../../../../../service/admin/action/categoryAction";


class HomeProductRow extends Component {


    componentDidMount() {
        let {categoryAction} = this.props;
        categoryMenuAction.fetchFindAll();

    }


    renderCategories = () => {
        let {customerCategories} = this.props;
        let categories = customerCategories.slice(0, 5);

        return categories.map((category, index) => {

            let {productDtos} = category;

            productDtos = productDtos.slice(0, 5);

            return (
                <Fragment key={index}>
                    <div className="section-title style-2 wow animate__animated animate__fadeIn" style={{paddingTop: "25px"}}>
                        <h3>{category.name}</h3>
                    </div>
                    <div className="tab-content" id="myTabContent">
                        <div className="row product-grid-4">
                            {
                                productDtos.map((product, index) =>
                                    <HomeProductItem key={index} product={product}/>
                                )
                            }
                        </div>
                    </div>
                </Fragment>

            )
        });
    }


    render() {
        return (
            <section className="product-tabs section-padding position-relative">
                <div className="container">
                    {this.renderCategories()}
                </div>
            </section>
        );
    }


}



const mapStateToProps = state => {
    return {
        //categories: state.categories,
        customerCategories : state.customerCategories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        categoryAction: bindActionCreators(categoryMenuAction, dispatch)
    }
}

const store = connect(mapStateToProps, mapDispatchToProps);



export default compose
(store)
(HomeProductRow);