import React, { useEffect, useState } from 'react'
import Table from './Table'
import { columns } from "../tableData/UserData";
import AdminDashboardService from '../api/admindashboard';
const UserBooking = () => {
    const adminDashboardService = new AdminDashboardService()
    const [data, setData] = useState()
      useEffect(()=>{
        const getAllProvider = async ()=>{
            const res = await adminDashboardService.view();
            if(res.status === 200){
                console.log(res.data)
                setData(res.data)
            }
        }
        getAllProvider()
      })
  return (
    <Table columns={columns(data)} incomingData={data} />
  )
}

export default UserBooking