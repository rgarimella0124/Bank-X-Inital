import React from 'react'
import './clientRelationShip.scss'
import { Form, Row, Col, Button, Dropdown } from 'react-bootstrap'

function AddClientRelationship() {
    return (
        <div className='top_div'>
        <Form style={{paddingTop: '7px'}}>
          <Row>
            <Col>
            <Form.Group controlId="formGroupPassword">
             <Form.Label>Select a type</Form.Label>
             <Dropdown>
                <Dropdown.Toggle style={{backgroundColor: 'white', color: 'green', width: '100%', textAlign: 'left'}} id="dropdown-basic">
                <Form.Label style={{width:'96%'}}>Type 1</Form.Label>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Form.Group>

              <Form.Group controlId="formGroupPassword">
             <Form.Label>Select a frequency</Form.Label>
             <Dropdown>
                <Dropdown.Toggle style={{backgroundColor: 'white', color: 'green', width: '100%', textAlign: 'left'}} id="dropdown-basic">
                <Form.Label style={{width:'96%'}}>10</Form.Label>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Form.Group>

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

              <Form.Group controlId="formGroupEmail">
               <Form.Label>Field Value</Form.Label>
               <Form.Control size='lg' type="text" placeholder="Value" style={{border: '1px solid #2dd771'}}/>
              </Form.Group>
            </Col>

            <Col>
            <Form.Group controlId="formGroupPassword">
             <Form.Label>Select a level</Form.Label>
             <Dropdown>
                <Dropdown.Toggle style={{backgroundColor: 'white', color: 'green', width: '100%', textAlign: 'left'}} id="dropdown-basic">
                <Form.Label style={{width:'96%'}}>Level 1</Form.Label>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Form.Group> 

              <Form.Group controlId="formGroupPassword">
             <Form.Label>Select Applicable On</Form.Label>
             <Dropdown>
                <Dropdown.Toggle style={{backgroundColor: 'white', color: 'green', width: '100%', textAlign: 'left'}} id="dropdown-basic">
                <Form.Label style={{width:'96%'}}>Anytime</Form.Label>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Form.Group>

              <Form.Group controlId="formGroupPassword">
             <Form.Label>Fees Type</Form.Label>
             <Dropdown>
                <Dropdown.Toggle style={{backgroundColor: 'white', color: 'green', width: '100%', textAlign: 'left'}} id="dropdown-basic">
                <Form.Label style={{width:'96%'}}>Type 1</Form.Label>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Form.Group>
            </Col>

            <Col>
            <Form.Group controlId="formGroupPassword">
             <Form.Label>Select Field Name</Form.Label>
             <Dropdown>
                <Dropdown.Toggle style={{backgroundColor: 'white', color: 'green', width: '100%', textAlign: 'left'}} id="dropdown-basic">
                <Form.Label style={{width:'96%'}}>Field Name 1</Form.Label>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Form.Group>

              <Form.Group controlId="formGroupPassword">
             <Form.Label>Select Field Operator</Form.Label>
             <Dropdown>
                <Dropdown.Toggle style={{backgroundColor: 'white', color: 'green', width: '100%', textAlign: 'left'}} id="dropdown-basic">
                <Form.Label style={{width:'96%'}}>Operator 1</Form.Label>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Form.Group>

              <Form.Group controlId="formGroupEmail">
               <Form.Label>Fees</Form.Label>
               <Form.Control size='lg' type="text" placeholder="Enter Fees" style={{border: '1px solid #2dd771'}}/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Button type="submit" size="xs" style={{margin: '0 auto', width: '31%', padding: '10px 0'}}>Submit</Button>
          </Row>
          </Form>
        </div>
        );
}

export default AddClientRelationship;
