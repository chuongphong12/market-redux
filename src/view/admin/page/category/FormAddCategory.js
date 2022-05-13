import {Component} from "react";
import * as formEntityAction from "../../../../core/admin/action/formEntityAction";
import bindActionCreators from "react-redux/lib/utils/bindActionCreators";
import {connect} from "react-redux";
import {Field, reduxForm, SubmissionError} from "redux-form";
import {compose} from "redux";
import {notifyError, notifySuccess} from "../../../../utils/notify";
import categoryApi from "../../../../core/admin/api/categoryApi";


class FormAddCategory extends Component {

    componentDidMount() {
        let {formEntityAction, formEntity, initialValues} = this.props;

        formEntityAction.setFormEntity({
            name: "name",
            description: "description"
        });

        console.log(initialValues);
    }

    renderNameField = ({input, meta: {error}}) => {
        let className = error === undefined ? "form-control" : "form-control is-invalid";
        return (
            <>
                <input {...input} type="text" className={className}/>
                <span className="text-danger">{error}</span>
            </>
        );
    }

    renderDescriptionField = ({input}) => {
        return (
            <textarea {...input} className="form-control" rows="4"/>
        )
    }

    addCategory = async (category) => {
        if (category.name === undefined) {
            throw new SubmissionError({name: "Không bỏ trống trường này"});
        }

        let temp = null;

        await categoryApi.add(category)
            .then(response => {
                temp = response.data;
            }).catch(error => {
                console.log(error);
            });

        if (temp != null) {
            notifySuccess("Đã thêm thành công");
        } else {
            notifyError("Thêm thất bại");
            throw new SubmissionError({name: "Tên danh mục đã tồn tại"});
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
                            <h4>Thông tin Danh mục</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(this.addCategory)}>
                                <div className="mb-4">
                                    <label htmlFor="categoryName_name" className="form-label">Tên Danh mục</label>
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
    return {
        formEntity: state.formEntity,
        initialValues: state.formEntity,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        formEntityAction: bindActionCreators(formEntityAction, dispatch)
    }
}

const store = connect(mapStateToProps, mapDispatchToProps);

const form = reduxForm({
    form: "FormAddCategory",
    enableReinitialize: true
})

export default compose
(store, form)
(FormAddCategory);