import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Form, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginImg from '../../../images/login.png';


const Register = () => {
    // import functions from useFirebase hook
    const { getUserEmail, getUserPassword, handleRegistration, name, email, error, getUserName, saveUser, setUsers, setError, verifyEmail, setUserName } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const redirect = location?.state?.from || '/home';

    return (
        <div style={{ 'background': 'linear-gradient(to right, #dae2f8, #d6a4a4)', 'height': '100vh' }}>

            <Container className='pt-5'>
                <div className='border w-50 mx-auto p-5 rounded shadow'>

                    <img src={loginImg} className='rounded-circle my-3 d-block mx-auto' style={{ 'height': '80px', 'width': '80px' }} alt="" />

                    < Form onSubmit={(e) => {
                        e.preventDefault();

                        handleRegistration()
                            .then((result) => {

                                let user = result.user;

                                user.email = email;
                                user.displayName = name;

                                setUsers(user)

                                verifyEmail();
                                setUserName();
                                navigate(redirect);

                                //save user to database
                                saveUser(user.displayName, user.email, 'POST');
                            })
                            .catch((error) => {
                                setError(error.message)
                            })
                    }}>
                        <Form.Group className="mb-3 d-flex align-items-center" controlId="formGroupName">
                            <FontAwesomeIcon icon={faUser} className='fs-5 m-2' style={{ 'color': '#c13f22' }} />
                            <Form.Control
                                type="text"
                                placeholder="Your Name"
                                name='name'
                                onBlur={getUserName}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 d-flex align-items-center" controlId="formGroupEmail">
                            <FontAwesomeIcon icon={faEnvelope} className='fs-5 m-2' style={{ 'color': '#c13f22' }} />

                            <Form.Control
                                type="email"
                                placeholder="Email ID"
                                name='email'
                                onBlur={getUserEmail}
                            />

                        </Form.Group>

                        <Form.Group className="mb-3 d-flex align-items-center" controlId="formGroupPassword">
                            <FontAwesomeIcon icon={faLock} className='fs-5 m-2' style={{ 'color': '#c13f22' }} />
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name='password'
                                onBlur={getUserPassword}
                            />
                        </Form.Group>

                        <Button type='submit' variant='none' className='w-100 text-white fw-bold fs-5 border-0'
                            style={{ 'background': 'linear-gradient(to right, #b92b27, #1565c0)' }}>
                            Sign Up
                        </Button>

                    </Form>

                    <p className='text-center'>Already have an Account? <NavLink to='/login'>[Sign in]</NavLink></p>

                </div>
            </Container>

        </div >
    );
};

export default Register;