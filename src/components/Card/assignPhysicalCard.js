import React from 'react'
import { Button, Col, Form, Dropdown, Row } from 'react-bootstrap'
import './card.scss'

function AssignPhysicalCard() {
    return (
        <div className='top_div'>
        <Row>
            <Col>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Status</Form.Label>
                <Dropdown>
                <Dropdown.Toggle style={{backgroundColor: 'white', color: 'green', width: '100%', textAlign: 'left'}} id="dropdown-basic">
                <Form.Label style={{width:'96%'}}>Active</Form.Label>
                </Dropdown.Toggle>
                    <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Form.Group>

            <Form.Group controlId="">
                <Form.Label>Field Value</Form.Label>
                <Form.Control size='lg' type="text" placeholder="Value" style={{border: '1px solid #2dd771'}}/>
            </Form.Group>
            </Col>

            <Col>
             <Form.Group controlId="" style={{height: '47%'}}>
                 <Form.Label>Field Value</Form.Label>
                 <Form.Control size='lg' type="text" placeholder="Value" style={{border: '1px solid #2dd771'}}/>
            </Form.Group>
            <Form.Group controlId="" style={{height: '47%'}}>
                 <Form.Label>Value</Form.Label>
                 <Form.Control size='lg' type="text" placeholder="Value" style={{border: '1px solid #2dd771'}}/>
             </Form.Group>
            </Col>
        </Row>
        <Row>
            <Button type='secondary' style={{width: '48%', margin: '0 auto'}}>Submit</Button>
        </Row>
        </div>
    )
}

export default AssignPhysicalCard