import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Form, Button, Container, Alert } from 'react-bootstrap';
import { login } from '../../firebase';

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const  handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            navigate('/dashboard');
        } catch (error) {
            setError('Failed to log in')
            setLoading(false);
        }
    }

    return (
        <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
            <div className='w-100' style={{ maxWidth: '400px' }}>
                <Card>
                    <Card.Body>
                        <h2 className='text-center mb-4'>
                            Log In
                        </h2>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" id='email'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type='email' ref={emailRef} required/>
                            </Form.Group>
                            <Form.Group className="mb-3" id='emial'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' ref={passwordRef} required/>
                            </Form.Group>
                            <Button disabled={loading} className='w-100' type='submit'>Log In</Button>
                        </Form>
                    </Card.Body>                    
                </Card>
                <div className='w-100' text-center='true' mt-2='true'>
                    Need an account ? <Link to='/signup'>Sign Up</Link> 
                </div>
            </div>
        </Container>
    );
};

export default Signup;