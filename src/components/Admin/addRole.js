import React from 'react'
import './admin.scss'
import { Form, Dropdown, Col, Row, Button } from 'react-bootstrap'

function AddRole() {
    return (
        <div className='top_div'>
            <Row>
                <Col>
                <Form.Group controlId="">
                    <Form.Label>Role Name</Form.Label>
                    <Form.Control size='lg' type="text" placeholder="Enter role name" style={{border: '1px solid #2dd771'}}/>
                </Form.Group>
                </Col>

                <Col>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Select Privilage</Form.Label>
                    <Dropdown>
                    <Dropdown.Toggle style={{backgroundColor: 'white', color: 'green', width: '100%', textAlign: 'left'}} id="dropdown-basic">
                    <Form.Label style={{width:'96%'}}>Select privilage</Form.Label>
                    </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Form.Group>
                </Col>
            </Row>
            <Button type='primary' style={{margin: '0 auto', width: '48%'}}>Submit</Button>

        </div>
    )
}

export default AddRole