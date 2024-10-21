import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

export const Item = (props) => {
  return (
    <div className='item'>

   <Link to={`/SinglePage/${props.id}`}><img src={props.image} alt ='img1'/></Link>
    
    <p>{props.name}</p>
    <div className='item-price'>
        <div className='item-price-new'>
            ${props.new_price}
        </div>
        <div className='item-price-old'>
        ${props.old_price}
        </div>
    </div>
    </div>
  )
}

export default Item;