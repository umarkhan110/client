import React from 'react'
import { useLocation } from 'react-router-dom';
import Price from '../components/Price';
const Pricing = () => {
    let location = useLocation();
    const massagetype = location.pathname.split("/price")[1];
    const formattedMassageType = massagetype.replace(/%20/g, " "); // Use regex to replace all occurrences
    const massageTypeWithoutSlash = formattedMassageType.substring(1); // Remove leading '/'
    // console.log(massageTypeWithoutSlash);
  return (
    <Price massageTypeWithoutSlash={massageTypeWithoutSlash}/>
  )
}

export default Pricing 