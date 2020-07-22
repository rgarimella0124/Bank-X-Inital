import React from 'react';
import './clientPrefund.scss'
import { Button } from 'react-bootstrap';
import PaginationCommon from '../../common/Pagination/pagination'
import TableCommonComponent from '../../common/Table/Table'

const tableHeadArray = [
    'S.No.',
    'Date of Transfer',
    'Client Name',
    'Amount',
    'Bank Reference Number',
    'Client Account Number',
    'NIUM Account Number',
    'Comments',
    'Currency',
    'Status',
    'Approved',
    'Rejected'
]

const tableData = [
    {no:1., clientName: 'Mark', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$562',updateFees: '$762', one: '****', two: '****', three: '****', action: ['Update Relationships', 'View Mapping']},
    {no:2., clientName: 'Otto', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$5962',updateFees: '$562', one: '****', two: '****', three: '****', action: ['Update Relationships', 'View Mapping']},
    {no:3., clientName: 'Riya', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$662',updateFees: '$762', one: '****', two: '****', three: '****',  action: ['Update Relationships', 'View Mapping']},
    {no:4., clientName: 'Marksman', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$562',updateFees: '$562', one: '****', two: '****', three: '****', action: ['Update Relationships', 'View Mapping']},
    {no:5., clientName: 'Robin', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$5678',  updateFees: '$562', one: '****', two: '****', three: '****', action: ['Update Relationships', 'View Mapping']}
]


const ViewListButton = () => {
    return (
        <Button type="submit" size="sm" style={{width: '100%'}}>View MCC List</Button>
    )
}

function ClientPrefundApproval() {
    return (
        <div className='table_div'>
            <TableCommonComponent tableHeadArray={tableHeadArray} tableData={tableData}/>
            <PaginationCommon/>
        </div>
        );
}

export default ClientPrefundApproval;
