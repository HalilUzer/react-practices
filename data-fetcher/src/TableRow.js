import React from 'react'
import './TableRow.css'

const TableRow = ({ rowData, keys }) => {
    return (
        <tr className='TableRow'>
            {
                keys.map(key => <td className='TableData' key={key}>{typeof rowData[key] === 'object' ? JSON.stringify(rowData[key]) : rowData[key]}</td>)
            }
        </tr>
    )
}

export default TableRow