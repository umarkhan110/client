import React, { useEffect, useState } from 'react'
import Table from './Table'
import { columns } from "../tableData/UserData";
import { bookingcolumns } from "../tableData/BookingTable";
import AdminDashboardService from '../api/admindashboard';
import BookingService from "../api/booking"
const Providers = () => {
  const role = localStorage.getItem("role")
    const adminDashboardService = new AdminDashboardService()
    const bookingService = new BookingService()
    const [data, setData] = useState()
      useEffect(()=>{
       
        const id = localStorage.getItem("user")
        if(role === "Client"){
          const getAllBookings = async ()=>{
            const res = await bookingService.viewbooking(id);
            if(res.status === 200){
                console.log(res.data)
                setData(res.data)
            }
        }
        getAllBookings()
        }else{
          const getAllProvider = async ()=>{
            const res = await adminDashboardService.view();
            if(res.status === 200){
                console.log(res.data)
                setData(res.data)
            }
        }
        getAllProvider()
        }
      })
  return (
    <>
    {role === "Client" ?
      <Table columns={bookingcolumns(data)} incomingData={data} />
      :
      <Table columns={columns(data)} incomingData={data} />
    }
    </>
  )
}

export default Providers