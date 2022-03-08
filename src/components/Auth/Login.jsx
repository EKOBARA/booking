// import React,  { useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Card, Form, Button, Container, Alert } from 'react-bootstrap';
// // import { useAuth } from './AuthContext';


// const Login = () => {
//     const emailRef = useRef();
//     const passwordRef = useRef();
//     // const { signUp } = useAuth();
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false)

//     // const  handleSubmit = async (e) => {
//     //     e.preventDefault();

//     //     try {
//     //         setError('');
//     //         setLoading(true);
//     //         await signUp(emailRef.current.value, passwordRef.current.value)
//     //     } catch (error) {
            
//     //     }
//     // }

//     return (
//          <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
//             <div className='w-100' style={{ maxWidth: '400px' }}>
//                 <Card>
//                     <Card.Body>
//                         <h2 className='text-center mb-4'>
//                             Log In
//                         </h2>
//                         {error && <Alert variant='danger'>{error}</Alert>}
//                         <Form >
//                             <Form.Group className="mb-3" id='email'>
//                                 <Form.Label>Email</Form.Label>
//                                 <Form.Control type='email' ref={emailRef} required/>
//                             </Form.Group>
//                             <Form.Group className="mb-3" id='emial'>
//                                 <Form.Label>Password</Form.Label>
//                                 <Form.Control type='email' ref={passwordRef} required/>
//                             </Form.Group>
//                             <Button disabled={loading} className='w-100' type='submit'>Log In</Button>
//                         </Form>
//                     </Card.Body>                    
//                 </Card>
//                 <div className='w-100' text-center mt-2>
//                     Already have an account? <Link to='/login'> LogIn</Link>
//                 </div>
//             </div>
//         </Container>
//     );
// };

// export default Login;