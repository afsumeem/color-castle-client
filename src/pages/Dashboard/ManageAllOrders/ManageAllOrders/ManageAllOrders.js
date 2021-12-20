import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);


    // fetch all orders from api

    useEffect(() => {
        fetch('https://stormy-woodland-90777.herokuapp.com/colorCastleOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, []);
    return (
        <div className="table-responsive">
            {/* manage all orders title */}
            <h2>Manage All Orders</h2>

            <Table striped bordered hover size="sm" className=" fs-6 border-4">

                {/* all orders list header*/}
                <thead>
                    <tr>
                        <th className="p-2">Name</th>
                        <th className="p-2">Service Name</th>
                        <th className="p-2">Order Date</th>
                        <th className="p-2">Order Status</th>
                        <th className="p-2">Manage Order</th>
                    </tr>
                </thead>

                <tbody>
                    {/* map all orders list*/}
                    {
                        allOrders.map(allOrder => <ManageAllOrder

                            key={allOrder._id}
                            allOrder={allOrder}

                        ></ManageAllOrder>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageAllOrders;