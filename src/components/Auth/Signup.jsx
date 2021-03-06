import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, Form, Button, Container, Alert } from 'react-bootstrap';
import { useAuth } from './AuthContext';

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPassRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const  handleSubmit = async (e) => {
        e.preventDefault();

        if (passwordRef.current.value !== confirmPassRef.current.value) {
            return setError('Passwords Does Not Match')
        }

        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch (error) {
            setError('Failed to create account')
        }
    }

    return (
        <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
            <div className='w-100' style={{ maxWidth: '400px' }}>
                <Card>
                    <Card.Body>
                        <h2 className='text-center mb-4'>
                            Sign Up
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
                            <Form.Group className="mb-3" id='emial'>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type='password' ref={confirmPassRef} required/>
                            </Form.Group>
                            <Button disabled={loading} className='w-100' type='submit'>Sign Up</Button>
                        </Form>
                    </Card.Body>                    
                </Card>
                <div className='w-100' text-center='true' mt-2='true'>
                    Already have an account? 
                </div>
            </div>
        </Container>
    );
};

export default Signup;