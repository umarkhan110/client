import React from 'react'
import { useNavigate } from 'react-router-dom'

const DashboardHeader = () => {
  const navigate = useNavigate()
  // const token = localStorage.getItem("massage-token")
  const logout = async ()=>{
    localStorage.removeItem("massage-token")
    localStorage.removeItem("role")
    localStorage.removeItem("user")
    navigate("/")
  }
  return (
    <div class="header shadow-sm bg-white position-relative">
    <div class="d-flex justify-content-between mx-4">
      <h5 class="username py-3"><a href='/'>Body Workers</a></h5>
      <button className="my-3 text-light border border-success px-3 py-2 border-opacity-10 rounded-pill" onClick={logout}>Logout</button>
    </div>
    </div>
  )
}

export default DashboardHeader