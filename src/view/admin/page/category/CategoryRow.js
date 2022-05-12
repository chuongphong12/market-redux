import {Component} from "react";
import ModalConfirm from "../../component/ModalConfirm";
import {fetchDeleteById} from "../../../../service/admin/action/categoryAction";


class CategoryRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // isShowFormUpdate: false,
            isShowConfirmDialog: false
        }
    }

    /**
     * TODO: khi click vào nút delete để thay đổi trạng thái trong state ==> để mở modal
     */
    openModalConfirmDelete = () => {
        this.setState({
            isShowConfirmDialog: true
        })
    }

    /**
     * TODO: đóng modal (bấm nút đóng trên modal)
     */
    closeConfirmDelete = () => {
        this.setState({
            isShowConfirmDialog: false
        })
    }

    /**
     * TODO: bấm xác nhận trên modal
     */
    submitConfirmDelete = () => {
        let {categoryAction, category} = this.props;
        categoryAction.fetchDeleteById(category.id);

        this.closeConfirmDelete();
    }

    /**
     * TODO: hàm render ra modal
     */
    renderModalConfirmDelete = (message) => {
        let {isShowConfirmDialog} = this.state;
        if (isShowConfirmDialog) {
            let modalConfirm = {
                isShowConfirmDialog: isShowConfirmDialog,
                message,
                closeConfirmDialog: this.closeConfirmDelete,
                submitConfirmDialog: this.submitConfirmDelete
            }
            return <ModalConfirm modalConfirm={modalConfirm}/>
        }
    }

    render() {

        let {category} = this.props;

        return (
            <tr>
                <td>{category.id}</td>
                <td><b>{category.name}</b></td>
                <td>{category.description}</td>
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

export default CategoryRow;