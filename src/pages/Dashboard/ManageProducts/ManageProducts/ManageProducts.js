import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {

    const [manageProducts, setManageProducts] = useState([]);

    // fetch all brands from api
    useEffect(() => {

        fetch('https://stormy-woodland-90777.herokuapp.com/colorCastleServices')
            .then(res => res.json())
            .then(data => setManageProducts(data))
    }, []);


    return (
        <div className="bg-primary bg-opacity-25 pb-5 pt-3 my-0">

            {/* manage all Service title */}

            <Table striped bordered hover size="sm" className="w-75 mx-auto fs-5 ">
                <thead>

                    {/* Service list title */}
                    <tr>
                        <th className="p-3">Service Name</th>
                        <th className="p-3">Price</th>
                        <th className="p-3">Manage Services</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        manageProducts.map(manage => <ManageProduct

                            key={manage._id}
                            manage={manage}

                        ></ManageProduct>)
                    }
                </tbody>
            </Table>



        </div>
    );
};

export default ManageProducts;