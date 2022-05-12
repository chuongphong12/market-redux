import {Component} from "react";
import ModalConfirm from "../../component/ModalConfirm";
import {fetchDeleteById} from "../../../../service/admin/action/brandAction";

class BrandRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowConfirmDialog: false
        }
    }

    openModalConfirmDelete = () => {
        this.setState({
            isShowConfirmDialog: true
        })
    }

    closeConfirmDelete= () => {
        this.setState({
            isShowConfirmDialog: false
        })
    }

    submitConfirmDelete = () => {
       let {brandAction,brand} = this.props;
       brandAction.fetchDeleteById(brand.id);
       this.closeConfirmDelete();
    }

    renderModalConfirmDelete = (message) => {
        let {isShowConfirmDialog} = this.state;
        if (isShowConfirmDialog){
            let modalConfirm = {
                isShowConfirmDialog: isShowConfirmDialog,message,
                closeConfirmDialog: this.closeConfirmDelete,
                submitConfirmDialog: this.submitConfirmDelete
            }
            return <ModalConfirm modalConfirm={modalConfirm}/>
        }
    }
    render() {
        let {brand} = this.props;


        return (
            <tr>
                <td>{brand.id}</td>
                <td><b>{brand.name}</b></td>
                <td>{brand.description}</td>
                <td className="text-end">
                    <button className="btn btn-sm font-sm rounded btn-brand c-mg-r-5">
                        <i className="material-icons md-edit"/>Sửa
                    </button>
                    <button onClick={this.openModalConfirmDelete} className="btn btn-sm font-sm btn-light rounded">
                        <i className="material-icons md-delete_forever"/>Xóa
                    </button>
                </td>
                {this.renderModalConfirmDelete("Bạn muốn xóa mục này ?")}
            </tr>

        );
    }
}

export default BrandRow;