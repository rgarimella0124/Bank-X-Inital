import React from 'react'
import './bulkRegistration.scss'
import TableCommonComponent from '../../common/Table/Table'

const tableHeadArray = [
    'S.No.',
    'Updated Date',
    'File Name',
    'Downloaded File',
    'Uploaded By',
    'Created Date',
    'Document Type',
    'Status',
    'Action'
  ]
  
  const tableData = [
    {no:1., id: '****', fileName:'****', doenloadedfile: '****', status:'****', createdAt: '****', documentType: '****', action: ['Approve', 'Reject']},
    {no:1., id: '****', fileName:'****', doenloadedfile: '****', status:'****', createdAt: '****', documentType: '****', action: ['Approve', 'Reject']},
    {no:1., id: '****', fileName:'****', doenloadedfile: '****', status:'****', createdAt: '****', documentType: '****', action: ['Approve', 'Reject']},
    {no:1., id: '****', fileName:'****', doenloadedfile: '****', status:'****', createdAt: '****', documentType: '****', action: ['Approve', 'Reject']},
    {no:1., id: '****', fileName:'****', doenloadedfile: '****', status:'****', createdAt: '****', documentType: '****', action: ['Approve', 'Reject']},
    {no:1., id: '****', fileName:'****', doenloadedfile: '****', status:'****', createdAt: '****', documentType: '****', action: ['Approve', 'Reject']},
    {no:1., id: '****', fileName:'****', doenloadedfile: '****', status:'****', createdAt: '****', documentType: '****', action: ['Approve', 'Reject']}
  ]

function BulkCustomerList() {
    return (
        <div className='top_div'>
        <TableCommonComponent tableHeadArray={tableHeadArray} tableData={tableData}/>
        </div>
    )
}

export default BulkCustomerList