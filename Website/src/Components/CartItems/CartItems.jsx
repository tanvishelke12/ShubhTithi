// import React, { useContext } from 'react'
// import './CartItems.css'
// import { ShopContext } from '../Context/ShopContext'
// import remove_icon from '../assets/cart_cross_icon.png'
// import { Button } from 'react-bootstrap'

// export const CartItems = () => {
// const {all_product,cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext);
// // console.log(cartItems)
    
//   return (

   
//     <div className='cartitems'>
//     <div className='cartitems-format-main'>
//     <p>Products</p>
//     <p>Title</p>
//     <p>Price</p>
//     <p>Qunatity</p>
//     <p>total</p>
//     <p>Remove</p>2
//     </div>
//     <hr/>
   

//     { all_product.map((e)=>{
//       if(cartItems[e.id]>0)
//       {
//         return <div>
//           <div className='cartitems-format-main cartitems-format'>
//           <img src={e.image} alt='' className='carticon-product-icon'/>
//           <p>{e.name}</p>
//           <p>{e.new_price}</p>
//           <button className='cartitems-quantity' >{cartItems[e.id]}</button>
//           <p>${e.new_price*cartItems[e.id]}</p>
//           <img  className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=''/>
//       </div>
//       <hr/>
//     </div>
//       }
//       return console.log(cartItems);
//     })}

//     <div className="cartitems-down">
//       <div className='cartitems-total'>
//         <h1>Cart Totals</h1>
//         <div>
//           <div className='cartitems-total-item'>
//             <p>SubTotal</p>
//             <p>${getTotalCartAmount()}</p>
//           </div>
//           <hr/>
//           <div className='cartitems-total-item'>
//             <p>Shipping Fee</p>
//             <p> Fee</p>
//           </div>
//           <hr/>
//           <div className='cartitems-total-item'>
//             <h3>Total</h3>
//             <h3>${getTotalCartAmount()}</h3>
//           </div>
//         </div>
//         <Button>Proceed</Button>
   
//       </div>
    
//     </div>
//     </div>
//   )
// }




import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'
import { Button } from 'react-bootstrap'

export const CartItems = () => {
const {all_product,cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext);

    
  return (
    <div className='cartitems'>

    <div className='cartitems-format-main'>
    <p>Products</p>
    <p>Title</p>
    <p>Price</p>
    <p>Qunatity</p>
    <p>total</p>
    <p>Remove</p>
    </div>
    <hr/>

    { all_product.map((e)=>{
      if(cartItems[e.id]>0)
      {
        return  <div>
          <div className='cartitems-format-main cartitems-format'>
          <img src={e.image} alt='' className='carticon-product-icon'/>
          <p>{e.name}</p>
          <p>{e.new_price}</p>
          <button className='cartitems-quantity' >{cartItems[e.id]}</button>
          <p>${e.new_price*cartItems[e.id]}</p>
          <img  className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=''/>
      </div>
      <hr/>
    </div>
      }
      return null;
    })}

    <div className="cartitems-down">
      <div className='cartitems-total'>
        <h1>Cart Totals</h1>
        <div>
          <div className='cartitems-total-item'>
            <p>SubTotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className='cartitems-total-item'>
            <p>Shipping Fee</p>
            <p> Fee</p>
          </div>
          <hr/>
          <div className='cartitems-total-item'>
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
        </div>
        <Button>Proceed</Button>
   
      </div>
    
    </div>
    </div>
  )
}

