import React from 'react'
import './Table.scss'
import { Table, Button } from 'react-bootstrap'


function TableCommonComponent({tableHeadArray, tableData }) {
    return (
            <Table striped bordered hover size="sm">
                <thead className='table_head'>
                    <tr>
                    {tableHeadArray.map((headName, index) =>
                    <th className='head_title' key={index}>{headName}</th>
                    )}
                    </tr>
                </thead>
                <tbody className='table_body'>
                    {tableData.map((data, index) => 
                    <tr key={index}>
                        {Object.keys(data).map(val => {
                            if (val !== "action") return <td>{data[val]}</td>
                            if (val === "action") return data[val].map(value => <td><Button>{value}</Button></td> )
                        })}
                    </tr>
                    )}
                </tbody>
            </Table>
            )
        }

export default TableCommonComponent;