import React from 'react';
import './client.scss'
import { Button } from 'react-bootstrap';
import PaginationCommon from '../../../common/Pagination/pagination'
import TableCommonComponent from '../../../common/Table/Table'

const tableHeadArray = [
    'S.No.',
    'ID',
    'Pocket name',
    'MCC',
    'Created Date',
    'Client ID',
    'Status',
    'Action'
]

const tableData = [
    {no:1., clientName: 'Mark', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$562',updateFees: '$762', action: ["View MCC List"]},
    {no:2., clientName: 'Otto', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$5962',updateFees: '$562', action: ["View MCC List"]},
    {no:3., clientName: 'Riya', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$662',updateFees: '$762', action: ["View MCC List"]},
    {no:4., clientName: 'Marksman', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$562',updateFees: '$562', action: ["View MCC List"]},
    {no:5., clientName: 'Robin', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$5678',  updateFees: '$562', action: ["View MCC List"]},
    {no:6., clientName: 'Chetan', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$752', updateFees: '$52', action: ["View MCC List"]},
    {no:7., clientName: 'Lakshman', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$62',   updateFees: '$562', action: ["View MCC List"]}]


const ViewListButton = () => {
    return (
        <Button type="submit" size="sm" style={{width: '100%'}}>View MCC List</Button>
    )
}

function PocketList() {
    return (
        <div className='table_div'>
            <TableCommonComponent tableHeadArray={tableHeadArray} tableData={tableData}/>
            <PaginationCommon/>
        </div>
        );
}

export default PocketList;
