import React, { useState } from 'react'
import {Col, Accordion, Card} from 'react-bootstrap'
import './sidebar.scss'
import neoKredLogo from '../../assets/neokredLogo.png'
import bulkRegistration from '../../assets/bulkregistration.svg'
import clientPrefund from '../../assets/clientPrefund.svg'
import reports from '../../assets/reports.svg'
import card from '../../assets/card.svg'
import customer from '../../assets/customer.svg'
import clientRelationship from '../../assets/clientRelationship.svg'
import client from '../../assets/client.svg'
import adminservice from '../../assets/adminservice.svg'
import compliance from '../../assets/compliance.svg'
import rightarrow from '../../assets/next.svg'
import { Link } from "react-router-dom"

function Sidebar(shouldShow) {
    const [toogleSidebar, setToogleSidebar] = useState(false)

    const handleHamClick = ()=> {
      setToogleSidebar(true)
    }

    return (  
        <>  
       {shouldShow ? <div className={toogleSidebar ? 'hide_sideBar' : 'sidebar'}>
            <Col style={{backgroundColor: '#f5f5f5'}} fixed="top">
                <img src={neoKredLogo} alt='logo' className={toogleSidebar ? 'hideImage' : 'image'}/>
                {/* <img src='' alt='asasdad' onClick={handleHamClick} className={toogleSidebar ? 'hideImageHam' : 'image'}/> */}
            </Col>
            <Col className='one card-header'>
            <Accordion defaultActiveKey="0" className={toogleSidebar ? 'hidedd' : 'dd'}>
                <Card className={toogleSidebar ? 'hide_card': 'card'}>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className='acdd'>
                        <img src={client} alt='logo' className={toogleSidebar ? 'hide_sideImage' : 'sidebar_image'}/>
                        <label className={toogleSidebar ? 'hide_siderbarName' : 'sidebar_name'}>Client</label>
                        <img src={rightarrow} alt='logo' className={toogleSidebar ? 'hide_rightimage' : 'rightarrow_image'}/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className='body'>
                            <Link to='/client/addclient' className='link'><p className='p'>Add Client</p></Link>
                            <Link to='/client/clientlist' className='link'><p className='p'>Client List</p></Link>
                            <Link to='/client/addpocket' className='link'><p className='p'>Add Pocket</p></Link>
                            <Link to='/client/pocketlist' className='link'><p className='p'>Pocket List</p></Link>
                            <Link to='/client/programlist' className='link'><p className='p'>Program List</p></Link>
                        </Card.Body>
                      
                    </Accordion.Collapse>
                </Card>
                <Card className={toogleSidebar ? 'hide_card': 'card'}>
                    <Accordion.Toggle as={Card.Header} eventKey="1" className='acdd'>
                        <img src={clientRelationship} alt='logo' className={toogleSidebar ? 'hide_sideImage' : 'sidebar_image'}/>
                        <label className={toogleSidebar ? 'hide_siderbarName' : 'sidebar_name'}>Client Relationship</label>      
                        <img src={rightarrow} alt='logo' className={toogleSidebar ? 'hide_rightimage' : 'rightarrow_image'}/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1" style={{backgroundColor: 'white'}}>
                    <Card.Body className='body'>
                        <Link to='/clientrelation/add' className='link'><p className='p'>Add Client Relationship</p></Link>
                        <Link to='/clientrelation/relationshipmapping' className='link'><p className='p'>Client Relationship Mapping</p></Link>
                        <Link to='/clientrelation/relationshiplist' className='link'><p className='p'>Client Relationship List</p></Link>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                
                <Card className={toogleSidebar ? 'hide_card': 'card'}>
                    <Accordion.Toggle as={Card.Header} eventKey="2" className='acdd'>
                        <img src={customer} alt='logo' className={toogleSidebar ? 'hide_sideImage' : 'sidebar_image'}/>
                        <label className={toogleSidebar ? 'hide_siderbarName' : 'sidebar_name'}>Customer</label>                    
                        <img src={rightarrow} alt='logo' className={toogleSidebar ? 'hide_rightimage' : 'rightarrow_image'}/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2" style={{backgroundColor: 'white'}}>
                    <Card.Body className='body'>
                        <Link to='/customer/addCustomer' className='link'><p className='p'>Add Coustomer</p></Link>
                        <Link to='/customer/customerList' className='link'><p className='p'>Customer List</p></Link>
                        <Link to='/customer/kycReports' className='link'><p className='p'>KYC Reports</p></Link>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className={toogleSidebar ? 'hide_card': 'card'}>
                 <Link to='/compliance' className='link'>
                    <Accordion.Toggle as={Card.Header} eventKey="3" className='acdd'>
                        <img src={compliance} alt='logo' className={toogleSidebar ? 'hide_sideImage' : 'sidebar_image'}/>
                        <label className={toogleSidebar ? 'hide_siderbarName' : 'sidebar_name'}>Compliance Report</label>                    
                    </Accordion.Toggle>
                 </Link>
                </Card>
                <Card className={toogleSidebar ? 'hide_card': 'card'}>
                    <Accordion.Toggle as={Card.Header} eventKey="4" className='acdd'>
                        <img src={card} alt='logo' className={toogleSidebar ? 'hide_sideImage' : 'sidebar_image'}/>
                        <label className={toogleSidebar ? 'hide_siderbarName' : 'sidebar_name'}>Cards</label>                    
                        <img src={rightarrow} alt='logo' className={toogleSidebar ? 'hide_rightimage' : 'rightarrow_image'}/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4" style={{backgroundColor: 'white'}}>
                    <Card.Body className='body'>
                        <Link to='/cards/cardList' className='link'><p className='p'>Card List</p></Link>
                        <Link to='/cards/assignPhysicalCards' className='link'><p className='p'>Assign Physical Cards</p></Link>
                        <Link to='/cards/bulkcardIssuance' className='link'><p className='p'>Bulk Card Issuance</p></Link>
                        <Link to='/cards/bulkCardIssuanceindent' className='link'><p className='p'>Bulk Card Issuance Indent</p></Link>
                        <Link to='/cards/addclient' className='link'><p className='p'>Bulk Card Issuance List</p></Link>
                        <Link to='/cards/addclient' className='link'><p className='p'>Bulk Card Issuance Response</p></Link>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className={toogleSidebar ? 'hide_card': 'card'}>
                    <Accordion.Toggle as={Card.Header} eventKey="5" className='acdd'>
                        <img src={reports} alt='logo' className={toogleSidebar ? 'hide_sideImage' : 'sidebar_image'}/>
                        <label className={toogleSidebar ? 'hide_siderbarName' : 'sidebar_name'}>Reports</label>                    
                        <img src={rightarrow} alt='logo' className={toogleSidebar ? 'hide_rightimage' : 'rightarrow_image'}/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5" style={{backgroundColor: 'white'}}>
                    <Card.Body className='body'>
                        <Link to='/client/addclient' className='link'><p className='p'>SettleMent Reports</p></Link>
                        <Link to='/client/addclient' className='link'><p className='p'>Transaction Reports</p></Link>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className={toogleSidebar ? 'hide_card': 'card'}>
                    <Accordion.Toggle as={Card.Header} eventKey="6" className='acdd'>
                        <img src={clientPrefund} alt='logo' className={toogleSidebar ? 'hide_sideImage' : 'sidebar_image'}/>
                        <label className={toogleSidebar ? 'hide_siderbarName' : 'sidebar_name'}>Client Prefund</label>                    
                        <img src={rightarrow} alt='logo' className={toogleSidebar ? 'hide_rightimage' : 'rightarrow_image'}/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6" style={{backgroundColor: 'white'}}>
                    <Card.Body className='body'>
                        <Link to='/clientPrefund/approval' className='link'><p className='p'>Client Prefund Approval</p></Link>
                        <Link to='/clientPrefund/walletrequest' className='link'><p className='p'>Wallet Fund Request</p></Link>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className={toogleSidebar ? 'hide_card': 'card'}>
                    <Accordion.Toggle as={Card.Header} eventKey="7" className='acdd'>
                        <img src={adminservice} alt='logo' className={toogleSidebar ? 'hide_sideImage' : 'sidebar_image'}/>
                        <label className={toogleSidebar ? 'hide_siderbarName' : 'sidebar_name'}>Admin Services</label>
                        <img src={rightarrow} alt='logo' className={toogleSidebar ? 'hide_rightimage' : 'rightarrow_image'}/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="7" style={{backgroundColor: 'white'}}>
                    <Card.Body className='body'>
                        <Link to='/admin/addRole' className='link'><p className='p'>Add Role</p></Link>
                        <Link to='/admin/userList' className='link'><p className='p'>User List</p></Link>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="8" className='acdd'>
                        <img src={bulkRegistration} alt='logo' className={toogleSidebar ? 'hide_sideImage' : 'sidebar_image'}/>
                        <label className={toogleSidebar ? 'hide_siderbarName' : 'sidebar_name'}>Bulk Registration</label>                    
                        <img src={rightarrow} alt='logo' className={toogleSidebar ? 'hide_rightimage' : 'rightarrow_image'}/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="8" style={{backgroundColor: 'white'}}>
                    <Card.Body className='body'>
                        <Link to='/client/addclient' className='link'><p className='p'>Bulk Customer Registraion</p></Link>
                        <Link to='/bulkregistration/bulkcustomerList' className='link'><p className='p'>Bulk Customer List</p></Link>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </Col>
        </div>: ""}
        </>
        );
}

export default Sidebar;
