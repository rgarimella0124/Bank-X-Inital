import React from 'react';
import './customer.scss'
import {Button } from 'react-bootstrap';
import PaginationCommon from '../../common/Pagination/pagination'
import TableCommonComponent from '../../common/Table/Table'

const tableHeadArray = [
    'S.No.',
    'ID Proof Number',
    'Document Type',
    'Status',
    'Issuing Authority',
    'Created Date',
    'Document 1',
    'Document 2',
    'Document 3',
    'Customer Name',
    'Fees Type',
    'Reject Reason'
]

const tableData = [
    {no:1., clientName: 'Mark', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$562',updateFees: '$762', one: '****', two: '****', three: '****', four: '****', five: '####'},
    {no:2., clientName: 'Otto', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$5962',updateFees: '$562', one: '****', two: '****', three: '****', four: '****', five: '####'},
    {no:3., clientName: 'Riya', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$662',updateFees: '$762', one: '****', two: '****', three: '****', four: '****', five: '####'},
    {no:4., clientName: 'Marksman', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$562',updateFees: '$562', one: '****', two: '****', three: '****', four: '****', five: '####'},
    {no:5., clientName: 'Robin', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$5678',  updateFees: '$562', one: '****', two: '****', three: '****', four: '****', five: '####'},
    {no:6., clientName: 'Chetan', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$752', updateFees: '$52', one: '****', two: '****', three: '****', four: '****', five: '####'},
    {no:7., clientName: 'Lakshman', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$62',   updateFees: '$562', one: '****', two: '****', three: '****', four: '****', five: '####'},
    {no:8., clientName: 'divya', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$562',updateFees: '$52', one: '****', two: '****', three: '****', four: '****', five: '####'},
    {no:9., clientName: 'Lakshman', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$62',   updateFees: '$562', one: '****', two: '****', three: '****', four: '****', five: '####'},
    {no:10., clientName: 'Lakshman', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$62',   updateFees: '$562', one: '****', two: '****', three: '****', four: '****', five: '####'},
    {no:11., clientName: 'Lakshman', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$62',   updateFees: '$562', one: '****', two: '****', three: '****', four: '****', five: '####'}
]


const ViewListButton = () => {
    return (
        <Button type="submit" size="sm" style={{width: '100%'}}>View MCC List</Button>
    )
}

function KycReports() {
    return (
        <div className='table_div'>
            <TableCommonComponent tableHeadArray={tableHeadArray} tableData={tableData}/>
            <PaginationCommon/>
        </div>
        );
}

export default KycReports;
