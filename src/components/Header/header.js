import React, { useState } from 'react'
import {Form, Image, Row, Navbar, Nav, FormControl, Card, Button } from 'react-bootstrap'
import userImage from '../../assets/user.svg'
import './header.scss'
import { useHistory } from 'react-router-dom'

const Headers = ()=> {
    let history = useHistory()

    const handleLogOut = ()=> {
        localStorage.clear('user')
        history.push('/')
    }

    return (
        <>
        <Navbar fixed='top'>
           <Form inline>
               <div className='header_search'>
                    <FormControl type='text' placeholder='Search...' className='mr-xs-2' />
                    <Button variant='outline-success' style={{width: '90px', marginLeft: '5px'}}>Search</Button>
               </div>
            </Form>
                <div className='image_detail' >
                    <Image src={userImage} roundedCircle style={{width: '5%', marginRight: '5px'}}/>
                    <Card.Text style={{fontWeight: '600'}}>Welcome, Tarun</Card.Text>
                </div>
                <p onClick={handleLogOut}>Log oout</p>
        </Navbar>
        </>
        )
}

export default Headers
