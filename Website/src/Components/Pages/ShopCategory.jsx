import React, { useContext } from 'react'
import './Css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import drop from '../assets/dropdown_icon.png'
import { Item } from '../Item/Item'
import all_product from '../assets/all_product'

export const ShopCategory = (props) => {
    const {all_Product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
    <div className='shopcategory-indexSort'>
        <p>
            <span>{props.category}</span>
        </p>
        <div className='Shopcategory-sort'>
            {/* Sort by <img src={drop} alt="Dd" /> */}
        </div>
    </div>
    <div className='shopcategory-products' >
    { all_product?.map((item,i)=>{
        if(props.category === item.category){
            return <Item key={i} id = {item.id} name = {item.name} image={item.image}  new_price={item.new_price}old_price={item.old_price}/>
        }
        else{
            return null;
        }
    })}
    </div>
    <div className='shopcategory-loadmore'>
        Expolre more
    </div>
    </div>
  )
}
