import React from 'react';
import './AlertModal.css'

const AlertModal = (props) => {
    const { alert } = props;
    if (alert()) {
        return (
            <div className='text-center'>
                <button type="button" className="btn mt-3 mb-3 alert-btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    A warning message
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <h4 className='text-danger'>You can not add more than 4 items</h4>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn button-33 btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div>

            </div>
        );
    }
};

export default AlertModal;