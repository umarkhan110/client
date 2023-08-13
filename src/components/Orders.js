import React, { useEffect, useState } from 'react'
import Table from './Table'
import { columns } from "../tableData/UserData";
import BookingService from '../api/booking';
const Orders = () => {
    const bookingService = new BookingService()
    const [data, setData] = useState()
      useEffect(()=>{
        const id = localStorage.getItem("user")
          const getAllBookings = async ()=>{
            const res = await bookingService.viewbooking(id);
            if(res.status === 200){
                console.log(res.data)
                setData(res.data)
            }
        }
        getAllBookings()
      }, [])
  return (
    <Table columns={columns(data)} incomingData={data} />
  )
}

export default Orders