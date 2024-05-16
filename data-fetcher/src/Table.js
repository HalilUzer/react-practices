import React from 'react'
import TableRow from './TableRow'
import './Table.css'

const Table = ({ responseData }) => {

    const keys = Object.keys(responseData[0]);

    console.log(keys)
    return (
        <table className='Table'>
            <thead>
                <tr>
                    {keys.map(key => <th key={key}> {key} </th>)}
                </tr>
            </thead>
            <tbody>
                {responseData.map(rowData => <TableRow key={rowData.id} rowData={rowData} keys={keys} />)}
            </tbody>

        </table>
    )
}

export default Table