import React from 'react'
import { useLocation } from 'react-router-dom';
import Service from '../components/Service';
const Services = () => {
    let location = useLocation();
    const massagetype = location.pathname.split("/service")[1];
    const formattedMassageType = massagetype.replace(/%20/g, " "); // Use regex to replace all occurrences
    const massageTypeWithoutSlash = formattedMassageType.substring(1); // Remove leading '/'
    // console.log(massageTypeWithoutSlash);
  return (
    <Service massageTypeWithoutSlash={massageTypeWithoutSlash}/>
  )
}

export default Services 