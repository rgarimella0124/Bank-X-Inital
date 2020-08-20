import React from 'react'
import './admin.scss'
import TableCommonComponent from '../../common/Table/Table'

const tableHeadArray = [
    'S.No.',
    'Name',
    'Email ID',
    'Mobile Number',
    'User Type',
    'Role',
    'Update Role',
    'Action',
    'Edit Action'
    ]

const tableData = [
    {no:1., clientName: 'Mark', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$562', action: ['Click Here', 'Block', 'Edit']},
    {no:2., clientName: 'Otto', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$5962', action: ['Click Here', 'Block', 'Edit']},
    {no:3., clientName: 'Riya', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$662', action: ['Click Here', 'Block', 'Edit']},
    {no:4., clientName: 'Marksman', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$562', action: ['Click Here', 'Block', 'Edit']},
    {no:5., clientName: 'Robin', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$5678', action: ['Click Here', 'Block', 'Edit']},
    {no:6., clientName: 'Chetan', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$752', action: ['Click Here', 'Block', 'Edit']},
    {no:7., clientName: 'Lakshman', email:'email@you.com', contact: '9695989666', program:'****', viewBalance: '$62', action: ['Click Here', 'Block', 'Edit']}
]

function UserListService() {
    return (
        <div className='table_div'>
             <TableCommonComponent tableHeadArray={tableHeadArray} tableData={tableData}/>
        </div>
    )
}

export default UserListService