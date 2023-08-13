import React, { useEffect, useState } from 'react'
import Table from '../Table'
import { bookingcolumns } from "../../tableData/BookingTable";
import AdminDashboardService from '../../api/admindashboard';
const OrderList = () => {
  const adminDashboardService = new AdminDashboardService()
    const [data, setData] = useState()
    const role = localStorage.getItem("role")
      useEffect(()=>{
        if(role === "Admin"){
          const getAllBookings = async ()=>{
            const res = await adminDashboardService.viewAllBooking();
            if(res.status === 200){
                console.log(res.data)
                setData(res.data)
            }
        }
        getAllBookings()
      }
      })
  return (
    <Table columns={bookingcolumns(data)} incomingData={data} />
  )
}

export default OrderList