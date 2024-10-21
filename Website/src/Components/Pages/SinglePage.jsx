import React, { useContext } from 'react'
import { Home } from '../Home/Home'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import { Breadcrum } from '../Breadcrum/Breadcrum'
import { ProductDisplay } from '../ProductDisplay/ProductDisplay'

export const SinglePage = () => {
    const {all_product} = useContext(ShopContext)
    const {productId}= useParams();
    const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
    <Breadcrum product={product} />
    <ProductDisplay product={product}/>
    </div>
  )
}
export default SinglePage;