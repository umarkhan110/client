import React from 'react'
import Massag from '../components/Massage'
import { useLocation } from 'react-router-dom';
const Massage = () => {
    let location = useLocation();
    const massagetype = location.pathname.split("/massage")[1];
    const formattedMassageType = massagetype.replace(/%20/g, " "); // Use regex to replace all occurrences
    const massageTypeWithoutSlash = formattedMassageType.substring(1); // Remove leading '/'
    // console.log(massageTypeWithoutSlash);
  return (
    <Massag massageTypeWithoutSlash={massageTypeWithoutSlash}/>
  )
}

export default Massage