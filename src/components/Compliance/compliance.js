import React from 'react'
import './compliance.scss'
import TableCommonComponent from '../../common/Table/Table'

const tableHeadArray = [
  'S.No.',
  'Email ID',
  'Customer Name',
  'Client Hash',
  'Customer creation Date',
  'Compliance ID',
  'Compliance Status',
  'Compliance service',
  'Action'
]

const tableData = [
  {no:1., email: '****', name:'****', clientHash: '****', creationDate:'****', complianceID: '****',statis: '****', service: '****', action: ['Approve']},
  {no:2., email: '****', name:'****', clientHash: '****', creationDate:'****', complianceID: '****',statis: '****', service: '****', action: ['Approve']},
  {no:3., email: '****', name:'****', clientHash: '****', creationDate:'****', complianceID: '****',statis: '****', service: '****', action: ['Approve']},
  {no:4., email: '****', name:'****', clientHash: '****', creationDate:'****', complianceID: '****',statis: '****', service: '****', action: ['Approve']},
  {no:5. , email: '****', name:'****', clientHash: '****', creationDate:'****', complianceID: '****',statis: '****', service: '****', action: ['Approve']},
  {no:6., email: '****', name:'****', clientHash: '****', creationDate:'****', complianceID: '****',statis: '****', service: '****', action: ['Approve']},
  {no:7., email: '****', name:'****', clientHash: '****', creationDate:'****', complianceID: '****',statis: '****', service: '****', action: ['Approve']}]

function Compliance() {
    return (
          <div className='top_div'>
            <TableCommonComponent tableHeadArray={tableHeadArray} tableData={tableData}/>
          </div>
            )
        }

export default Compliance;