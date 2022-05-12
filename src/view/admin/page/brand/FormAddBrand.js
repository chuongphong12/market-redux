import {Component} from "react";
import * as formEntityAction from "../../../../service/admin/action/formEntityAction";
import bindActionCreators from "react-redux/lib/utils/bindActionCreators";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";

class FormAddBrand extends Component{

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
            <input {...input} type="text" className={className}/>
        );
    }

    renderDescriptionField = ({input}) => {
        return (
            <textarea {...input} placeholder="Type here" className="form-control" rows="4"/>
        )
    }
    addBrand = (brand) => {
        console.log()
    }
    render() {
        return (
            <div className="row">
                <div className="col-9">
                    <div className="content-header">
                        <h2 className="content-title">Add New Product</h2>
                        <div>
                            <button className="btn btn-light rounded font-sm mr-5 text-body hover-up">Save to draft
                            </button>
                            <button className="btn btn-md rounded font-sm hover-up">Publich</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card mb-4">
                        <div className="card-header">
                            <h4>Basic</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="brand_name" className="form-label">Brand title</label>
                                    <Field name="name" component={this.renderNameField}/>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Full description</label>
                                    <Field name="description" component={this.renderDescriptionField}/>
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
    form: "FormAddBrand",
    enableReinitialize: true
})

export default compose
(store, form)
(FormAddBrand);