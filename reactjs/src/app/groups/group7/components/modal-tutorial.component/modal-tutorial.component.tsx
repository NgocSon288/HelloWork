import React from 'react';
import AppComponentBase from 'app/shared/components/AppComponentBase';
import './modal-tutorial.component.css'
import '../../styles.css'

export default class ModalTutorial extends AppComponentBase<any, any> {

    constructor(props: any) {
        super(props);

    }

    public render() {
        return (
            <div className={'modal ' + (this.props.isShow ? 'modal-show' : '')} >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title heading-5">Hướng dẫn thanh toán</h5>
                            <button type="button" className="close" onClick={this.hide}>
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="g7-btn" onClick={this.hide}>Đóng</button>
                            {/* <button type="button" className="g7-btn g7-btn-primary">Lưu</button> */}
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    hide = () => {
        this.props.hideModal();
    }
}
