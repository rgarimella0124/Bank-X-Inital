import React from 'react'
import './card.scss'
import TableCommonComponent from '../../common/Table/Table'

const tableHeadArray = [
    'S.No.',
    'Created Status',
    'Card Activation Status',
    'Card Account Number',
    'Card Client',
    'Card Number',
    'Card Last 4 digit',
    'Card Email ID',
    'Action'
  ]
  
  const tableData = [
    {no:1., email: '****', name:'****', clientHash: '****', creationDate:'****', complianceID: '****',statis: '****', service: '****', action: ['Update Demographic details']},
    {no:2., email: '****', name:'****', clientHash: '****', creationDate:'****', complianceID: '****',statis: '****', service: '****', action: ['Update Demographic details']},
    {no:3., email: '****', name:'****', clientHash: '****', creationDate:'****', complianceID: '****',statis: '****', service: '****', action: ['Update Demographic details']},
    {no:4., email: '****', name:'****', clientHash: '****', creationDate:'****', complianceID: '****',statis: '****', service: '****', action: ['Update Demographic details']},
    {no:5. , email: '****', name:'****', clientHash: '****', creationDate:'****', complianceID: '****',statis: '****', service: '****', action: ['Update Demographic details']}
  ]

function CardList() {
    return (
        <div className='top_div'>
            <TableCommonComponent tableHeadArray={tableHeadArray} tableData={tableData}/>
        </div>
    )
}

export default CardList;