// import React, { useContext } from 'react'
// import './ProductDisplay.css';
// import { ShopContext } from '../Context/ShopContext';


// export const ProductDisplay = (props) => {
//     const {product} = props;
//     const {addToCart}= useContext(ShopContext);
//   return (
//     <div className='productdisplay'>
//     <div className='productdisplay-left'>
//     <div className='productdisplay-img-list'>
//         <img src={product.image} alt=''/>
//         <img src={product.image} alt=''/>
//         <img src={product.image} alt=''/>
//         <img src={product.image} alt=''/>
//     </div>
//     <div className='productdisplay'>
//     <img className='productdisplay-main-img' src={product.image} alt=''/>
//     </div>

//     <div className='productdisplay-right'>  
//     <h1>{product.name}</h1>
//     <div className='productdisplay-right-price'>
//         <div className='productdisplay-right-price-old'>${product.old_price}</div>
//         <div className='productdisplay-right-price-new'>${product.new_price}</div>
//     </div>
//     <div className='productdisplay-right-description'>
//         thsia a product good nice great!!!!
//     </div>
//     <div className='productdisplay-right-size'>
//         <h1>Size</h1>
//         <div className='productdisplay-right-size'>
//             <div>S</div>
//             <div>M</div>
//             <div>L</div>
//             <div>XL</div>
//             <div>XXL</div>
//         </div>
//     </div>
//     <button onClick={()=>{addToCart(product.id)}}>Add TO cart</button>
//     </div>

//     </div>
//     </div>
//   )
// }




import React, { useContext } from 'react'
import './ProductDisplay.css';
import { ShopContext } from '../Context/ShopContext';
export const ProductDisplay = (props) => {
    const {product} = props;

    const {addToCart}= useContext(ShopContext);
  return (
    <div className='productdisplay'>
    <div className='productdisplay-left'>
    <div className='productdisplay-img-list'>
        <img src={product.image} alt=''/>
        <img src={product.image} alt=''/>
        <img src={product.image} alt=''/>
        <img src={product.image} alt=''/>
    </div>
    <div className='productdisplay'>
    <img className='productdisplay-main-img' src={product.image} alt=''/>
    </div>

    <div className='productdisplay-right'>  
    <h1>{product.name}</h1>
    <div className='productdisplay-right-price'>
        <div className='productdisplay-right-price-old'>${product.old_price}</div>
        <div className='productdisplay-right-price-new'>${product.new_price}</div>
    </div>
    <div className='productdisplay-right-description'>
        thsia a product good nice great!!!!
    </div>
    <div className='productdisplay-right-size'>
        <h1>Size</h1>
        <div className='productdisplay-right-size'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
        </div>
    </div>
    <button onClick={()=>{addToCart(product.id)}}>Add TO cart</button>
    </div>

    </div>
    </div>
  )
}
