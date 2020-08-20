import React, { useState } from 'react'
import { useHistory } from 'react-router'
import {Form, Button, Col, Row } from 'react-bootstrap'
import './login.scss'
import backgroundImage from '../../assets/DigitalCurrency.svg'
import bankX from '../../assets/bankxLogo.png'
import neoKredLogo from '../../assets/neokredLogo.png'
import ModalBox from '../../common/ModalBox/modal'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showModal, setShowModal] = useState(false)
    let history = useHistory();

    const handleLoginClick = (event) => {
        let emailStorageValueEncoded = window.btoa({email, password});
        localStorage.setItem("user", emailStorageValueEncoded);
        
        if (emailStorageValueEncoded.length > 0) {
            // history.push('/client/addClient')
            setShowModal(true)
        }
        // else {
        //     history.push('/')
        // }
    }
{
    const handleClose = ()=> {
        setShowModal(false)
    }

    return (
        <>
            <ModalBox showModal={showModal}/>
            <Row>
                <Col lg='5' style={{backgroundColor: 'white', height: '100vh'}}>
                <div className='login' style={{backgroundColor: 'white', paddingTop: '80px', paddingRight: '80px', paddingLeft: '80px'}}>
                    <img src={bankX} alt=''/>
                    <div style={{marginTop: '10px'}}>
                        <label style={{fontSize: '20px', fontWeight: '500'}}>powered by</label>
                        <img src={neoKredLogo} alt='' style={{width: '30%', paddingLeft: '10px'}}/>
                    </div>
                    <div className='login-form'>
                        <h1>Log In</h1>

                        <Form style={{paddingTop: '15px'}}>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="you@example.com" value={email} onChange={(event)=> setEmail(event.target.value)} style={{border: '1px solid #2dd771'}}/>
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your Password" value={password} onChange={(event)=> setPassword(event.target.value)} style={{border: '1px solid #2dd771'}}/>
                            </Form.Group>
                        </Form>
                    </div>
                    <Row>
                        <div className='check'>
                        <div className='checkbox'>
                            <input type="checkbox" id="checkbox" name="checkbox" value="login"/>
                            <label for="checkbox">Remember Me!</label>
                        </div>
                            <a href=''>Forgot Password?</a>
                        </div>
                    </Row>
                    <Button onClick={handleLoginClick} type="submit" style={{backgroundColor: '#2dd771', border: '1px solid #2dd771', width: '100%'}} size="lg">Log In</Button>
                </div>

                </Col>
                <Col>
                    <img src={backgroundImage} alt='' className='login-image'/>
                </Col>
            </Row>
            </>
        );
    }
}

export default Login
