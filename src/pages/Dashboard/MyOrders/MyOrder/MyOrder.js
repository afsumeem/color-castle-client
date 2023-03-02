import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const MyOrder = ({ myOrder }) => {
    const { service, name, date, _id, price, address, Contact } = myOrder;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleNoBtn = () => setShow(false);

    // handle delete order

    const handleDeleteOrder = id => {
        const url = `https://color-castle-server.onrender.com/colorCastleOrders/${id}`

        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    window.location.reload();
                }
            })
            .finally(setShow(false))
    };

    return (
        <>
            <tr>
                <td className="p-3">{name}</td>
                <td className="p-3">{service}</td>
                <td className="p-3">{address}</td>
                <td className="p-3">{price}</td>
                <td className="p-3">{date}</td>
                <td>

                    <button className="border-0 btn btn-0 mx-auto d-block text-danger" title="Delete Product" onClick={() => { setShow(true); }}>

                        <FontAwesomeIcon className="fs-6 me-2" icon={faTrashAlt} />
                    </button>
                </td>
                <td className="p-3">{Contact}</td>


            </tr >

            {/* Confirmation alert */}
            < Modal show={show} onHide={handleClose} >

                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Confirmation</h5>
                </div>
                <Modal.Body>Are you sure you want to cancel this order? This action cannot be undone and you will be unable to recover any data.</Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary" onClick={() => { handleDeleteOrder(_id) }}>
                        Yes! Delete it
                    </Button>
                    <Button variant="primary" onClick={handleNoBtn}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
};

export default MyOrder;