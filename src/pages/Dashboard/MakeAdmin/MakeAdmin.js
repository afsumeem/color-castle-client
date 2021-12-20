import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Alert, Button, FormControl, InputGroup } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    // handle make admin
    const handleMakeAdmin = e => {
        const user = { email };


        fetch('https://stormy-woodland-90777.herokuapp.com/colorCastleUsers/admin', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })
        e.preventDefault();
    };
    return (
        <div className="mt-5">
            {/* make admin title */}
            <h2 className='ms-5'>MAKE AN ADMIN</h2>


            {/* input form for making admin */}
            <form onSubmit={handleMakeAdmin} className="pt-3">

                <InputGroup className="mb-3 mt-4 w-50 mx-auto">

                    <FormControl
                        placeholder="abc@example.com"
                        aria-label="Your Email"
                        aria-describedby="basic-addon2"
                        onBlur={handleOnBlur}
                        type="email"

                    />


                    <InputGroup.Text id="basic-addon2"
                        className="bg-primary bg-opacity-75 ">
                        <FontAwesomeIcon className="fs-5 text-white mx-3" icon={faUser} />
                    </InputGroup.Text>

                </InputGroup>

                <br />


                <Button variant="primary"
                    className="w-50 mx-auto d-block mb-3 " style={{ 'background': 'linear-gradient(to right, #b92b27, #1565c0)' }} type="submit">
                    Make Admin
                </Button><br />

            </form>


            {
                success && <Alert variant='success'>
                    Made Admin Successfully
                </Alert>
            }
        </div>
    );
};

export default MakeAdmin;