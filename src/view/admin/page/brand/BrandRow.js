import ModalConfirm from "../../component/ModalConfirm";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {fetchDeleteById} from "../../../../core/admin/saga/brandSaga";

const BrandRow = (props) => {
    const dispatch = useDispatch();
    const [brand, setBrand] = useState(props.brand);
    const [isShowConfirmDialog, setIsShowConfirmDialog] = useState(false);


    const openModalConfirmDelete = () => {
        setIsShowConfirmDialog(true);
    }

    const closeConfirmDelete = () => {
        setIsShowConfirmDialog(false);
    }

    const submitConfirmDelete = () => {
        dispatch(() => fetchDeleteById(brand.id));
        closeConfirmDelete();
    }

    const renderModalConfirmDelete = (message) => {
        let {isShowConfirmDialog} = this.state;
        if (isShowConfirmDialog) {
            let modalConfirm = {
                isShowConfirmDialog: isShowConfirmDialog, message,
                closeConfirmDialog: this.closeConfirmDelete,
                submitConfirmDialog: this.submitConfirmDelete
            }
            return <ModalConfirm modalConfirm={modalConfirm}/>
        }
    }

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

export default BrandRow;