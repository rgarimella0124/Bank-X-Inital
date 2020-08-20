import React from 'react'
import {Form, Image, Navbar, FormControl, Card, Button } from 'react-bootstrap'
import userImage from '../../assets/user.svg'
import './header.scss'
import { useHistory } from 'react-router-dom'
import Logout from '../../assets/logout.svg'

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
                    <Image src={userImage} roundedCircle style={{width: '35px', marginRight: '5px'}}/>
                    <Card.Text className='welcome_name'>Welcome, Tarun</Card.Text>
                    <Image src={Logout} alt='logout' className='logout' onClick={handleLogOut}/>
                </div>
                {/* <p onClick={handleLogOut}>Log oout</p> */}
        </Navbar>
        </>
        )
}

export default Headers
