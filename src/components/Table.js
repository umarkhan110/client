import React from 'react'
import DataTable from 'react-data-table-component'
// import { tableCustomStyles } from '../assets/css/tableStyle';
const Table = ({
    columns,
  incomingData,
}) => {
  return (
    <div className="py-6 px-10 bg-[#FFFFFF] rounded-md"> 
      <DataTable
      // customStyles={tableCustomStyles}
    columns={columns}
    data={incomingData}
  /></div>
  )
}

export default Table