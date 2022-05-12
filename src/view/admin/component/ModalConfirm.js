import {Component} from "react";
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";

class ModalConfirm extends Component {

    render() {

        let {modalConfirm} = this.props;
        let {isShowConfirmDialog, message,
            closeConfirmDialog, submitConfirmDialog} = modalConfirm;

        return (
            <Modal show={isShowConfirmDialog} onHide={closeConfirmDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Thông báo</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{message}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={submitConfirmDialog} variant="primary">
                        Xác nhận
                    </Button>
                    <Button onClick={closeConfirmDialog} variant="secondary">
                        Hủy bỏ
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }


}

export default ModalConfirm;