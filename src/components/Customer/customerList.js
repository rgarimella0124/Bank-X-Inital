import React from 'react';
import './customer.scss'
import { Form, Row, Col, Button, Dropdown, Table, Pagination } from 'react-bootstrap';
import PaginationCommon from '../../common/Pagination/pagination'
import TableCommonComponent from '../../common/Table/Table'

const tableHeadArray = [
    'S.No.',
    'Customer ID',
    'Customer Name',
    'Preferred Name',
    'Customer Client',
    'Customer Company',
    'Date of Birth',
    'Email',
    'Mobile number',
    'created Date',
    'KYC Status',
    'Wallet status',
    'Country Name',
    'Action']

const tableData = [
    {no:1., clientName: 'Mark', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$562',updateFees: '$762', one: '****', two: '****', three: '****', four: '****', five: '****', six: '****', action: ['Update']},
    {no:2., clientName: 'Otto', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$5962',updateFees: '$562', one: '****', two: '****', three: '****', four: '****', five: '****', six: '****', action: ['Update']},
    {no:3., clientName: 'Riya', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$662',updateFees: '$762', one: '****', two: '****', three: '****', four: '****', five: '****', six: '****', action: ['Update']},
    {no:4., clientName: 'Marksman', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$562',updateFees: '$562', one: '****', two: '****', three: '****', four: '****', five: '****', six: '****', action: ['Update']},
    {no:5., clientName: 'Robin', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$5678',  updateFees: '$562', one: '****', two: '****', three: '****', four: '****', five: '****', six: '****', action: ['Update']},
    {no:4., clientName: 'Marksman', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$562',updateFees: '$562', one: '****', two: '****', three: '****', four: '****', five: '****', six: '****', action: ['Update']},
    {no:4., clientName: 'Marksman', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$562',updateFees: '$562', one: '****', two: '****', three: '****', four: '****', five: '****', six: '****', action: ['Update']}
]


function CustomerList() {
    return (
        <div className='table_div'>
            <TableCommonComponent tableHeadArray={tableHeadArray} tableData={tableData}/>
            <PaginationCommon/>
        </div>
        );
}

export default CustomerList;
