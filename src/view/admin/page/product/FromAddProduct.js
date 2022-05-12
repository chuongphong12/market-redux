import {Component} from "react";
import * as formEntityAction from "../../../../service/admin/action/formEntityAction";
import bindActionCreators from "react-redux/lib/utils/bindActionCreators";
import {connect} from "react-redux";
import {Field, reduxForm, SubmissionError} from "redux-form";
import {compose} from "redux";
import * as productApi from "../../../../service/admin/api/productApi";
import {notifyError, notifySuccess} from "../../../../service/util/notify";



class FromAddProduct extends Component{

    componentDidMount() {
        let {formEntityActon, formEntity, initialValues} = this.props;

        formEntityActon.setFormEntity({
            name : "name",
            description: "description"
        });
    }
    renderNameField = ({input, meta: {error}}) => {
        let className = error === undefined ? "form-control" : "form-control is- invalid";
        return (
            <>
                <input {...input} type="text" className={className}/>
                <span className={"text-danger"}>{error}</span>
            </>
        )
    }
    renderDescriptionField =({input}) => {
        return (
            <textarea {...input} className="form-control" rows="4"/>
        )
    }

    addProduct = async (product) => {
        if(product.name === undefined) {
            throw new SubmissionError({name:" Không bỏ trống trường này" });
        }

        let temp = null;

        await productApi.add(product)
            .then(response =>{
                temp = response.data;
            }).catch(error => {
                console.log(error);
            });
        if (temp != null) {
            notifySuccess("Đã thêm thành công");
        } else {
            notifyError("Thêm thất bại");
            throw new SubmissionError({name:"Tên danh mục đã tồn tại"});

        }
    }
    render() {

        let {handleSubmit} = this.props;

        return (
            <div className="row">
                <div className="col-9">
                    <div className="content-header">
                        <h2 className="content-title">Thêm mới</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card mb-4">
                        <div className="card-header">
                            <h4>Thông tin Sản Phẩm</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(this.addProduct)}>
                                <div className="mb-4">
                                    <label htmlFor="product_name" className="form-label">Tên Sản Phẩm</label>
                                    <Field name="name" component={this.renderNameField}/>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Mô tả</label>
                                    <Field name="description" component={this.renderDescriptionField}/>
                                </div>
                                <div className="text-end">
                                    <button className="btn btn-md rounded font-sm hover-up">Thêm mới</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return{
        fromEntity: state.fromEntity,
        initialValues: state.fromEntity,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        formEntityAction: bindActionCreators(formEntityAction,dispatch)
    }
}

const store = connect(mapStateToProps, mapDispatchToProps);

const from = reduxForm({
    form : "FormAddProduct",
    enableReinitialize: true
})

export default compose
(store, form)
(FromAddProduct);


