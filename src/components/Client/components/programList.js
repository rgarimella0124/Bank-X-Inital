import React from 'react';
import './client.scss'
import { Button } from 'react-bootstrap';
import PaginationCommon from '../../../common/Pagination/pagination'
import TableCommonComponent from '../../../common/Table/Table'

const tableHeadArray = [
    'S.No.',
    'Logo',
    'Program Code',
    'Description',
    'Status',
    'Action'
]

const tableData = [
    {no:1., clientName: 'Mark', email:'email@you.com', contact: '9695989666', program:'****', action: ['View Details'] },
    {no:2., clientName: 'Otto', email:'email@you.com', contact: '9695989666', program:'****', action: ['View Details'] },
    {no:3., clientName: 'Riya', email:'email@you.com', contact: '9695989666', program:'****', action: ['View Details'] },
    {no:4., clientName: 'Marksman', email:'email@you.com', contact: '9695989666', program:'****', action: ['View Details'] },
    {no:5., clientName: 'Robin', email:'email@you.com', contact: '9695989666', program:'****', action: ['View Details'] },
    {no:6., clientName: 'Chetan', email:'email@you.com', contact: '9695989666', program:'****', action: ['View Details'] },
    {no:7., clientName: 'Lakshman', email:'email@you.com', contact: '9695989666', program:'****', action: ['View Details'] },
    {no:8., clientName: 'Divya', email:'email@you.com', contact: '9695989666', program:'****', action: ['View Details'] }
]


const ViewListButton = () => {
    return (
        <Button type="submit" size="sm" style={{width: '100%'}}>View MCC List</Button>
    )
}

function ProgramList() {
    return (
        <div className='table_div'>
           <TableCommonComponent tableHeadArray={tableHeadArray} tableData={tableData}/>
            <PaginationCommon/>
        </div>
        );
}

export default ProgramList;
