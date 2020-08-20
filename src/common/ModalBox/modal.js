import React, { useState } from 'react'
import { Modal, Button, Row } from 'react-bootstrap'
import { useHistory } from 'react-router'
import OtpInput from 'react-otp-input'

function ModalBox({showModal, handleClose}) {
    const [otpInputValue, setOtpInputValue] = useState('123456')
    let history = useHistory();

    const handleLogin = ()=> {
        history.push('/client/addClient')
    }

    const handleOtpInputChange = (event)=> {
        console.log(event, 'event')
        setOtpInputValue(event.target.value)
    }

  return (
    <> 
      <Modal show={showModal} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Enter OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
            <OtpInput
                numInputs={6}
                value={otpInputValue}
                containerStyle={{width: '100%', margin: '0 70px'}}
                inputStyle={{padding: '25px', borderRadius: '25px', border: '1px solid green'}}
                onChange={(event) => handleOtpInputChange(event)}
                isInputNum={true}
                separator={<span>-</span>}
            />
        </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalBox;
