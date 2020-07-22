import React, { useState, useEffect } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './breadCrumb.scss'

function BreadCrumbs() {
  const [ firstValue, setfirstValue ] = useState('')
  const [ value, setValue] = useState('')
  
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;

    if (currentPath == '/client/addclient') {
      setfirstValue("Client")
      setValue('Add Client')
    } 
    else if (currentPath == '/client/clientlist') {
      setfirstValue("Client")
      setValue('Client List')
    } 
    else if (currentPath == '/client/addpocket') {
      setfirstValue("Client")
      setValue('Add Pocket')
    } 
    else if (currentPath == '/client/pocketlist') {
      setfirstValue("Client")
      setValue('Pocket List')
    } 
    else if (currentPath == '/client/programlist') {
      setfirstValue("Client")
      setValue('Program List')
    } 
    else if (currentPath == '/clientrelation/add') {
      setfirstValue('Client Relationship')
      setValue('Add Client')
    } 
    else if (currentPath == '/clientrelation/relationshipmapping') {
      setfirstValue('Client Relationship')
      setValue('Relationship Mapping')
    } 
    else if (currentPath == '/clientrelation/relationshiplist') {
      setfirstValue('Client Relationship')
      setValue('Relationship List')
    } 
    else if (currentPath == '/customer/addCustomer') {
      setfirstValue('Customer')
      setValue('Add Customer')
    } 
    else if (currentPath == '/customer/customerList') {
      setfirstValue('Customer')
      setValue('Customer List')
    } 
    else if (currentPath == 'customer/kycReports') {
      setfirstValue('Customer')
      setValue('KYC Reports')
    } 
    else if (currentPath == '/clientrelation/relationshipmapping') {
      setfirstValue('Client Relationship')
      setValue('Relationship Mapping')
    } 
    else if (currentPath == '/clientrelation/relationshipmapping') {
      setfirstValue('Client Relationship')
      setValue('Relationship Mapping')
    } 
    else if (currentPath == '/clientrelation/relationshipmapping') {
      setfirstValue('Client Relationship')
      setValue('Relationship Mapping')
    }
    else {
      setValue('Client')
      setfirstValue("Add Client")
    }
  }, [location]);

  return (
    <Breadcrumb>
        <Breadcrumb.Item >{firstValue}</Breadcrumb.Item>
        <Breadcrumb.Item className='breadcrumb_item'>{value}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadCrumbs;
