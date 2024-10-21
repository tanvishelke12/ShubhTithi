import React from 'react'
import './Breadcrum.css'
import arrow_img from '../assets/breadcrum_arrow.png';
export const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>  
    Gateway <img src={arrow_img} alt='no'/> 
    {product.category} <img src={arrow_img} alt='no'/> 
    {product.name}

    </div>
  )
}
export default Breadcrum;