import React, { useState } from 'react'
import './AddProduct.css'
import upload from '../../assets/upload.png'

export const AddProduct = () => {

    const [image,setImage] = useState(false);
    const [productDetails,setProductDetails]= useState({
        name:"",
        image:"",
        category :"Women",
        new_price:"",
        old_price:""
    })

    const changeHandler=(e)=>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const imageHandler=(e)=>{
        setImage(e.target.files[0])
    }

    const Add_Product = async ()=>{
        console.log(productDetails);
        let reponseData ;
        let product = productDetails;

        let formData = new FormData();
         formData.append('product',image);

         await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
         }).then((resp)=>resp.json()).then((data)=>{reponseData=data});

         if(reponseData.success){
            product.image = reponseData.image_url;
            console.log(product);

            await fetch('http://localhost:4000/addproduct',{
                method:'POST',
                headers:{
                    Accept : 'application/json',
                    'Content-Type':'application/json',   
                },
                body:JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert("product Added"):alert("Failed")
            })
         }
    }

  return (
    <div className='add-product'>
    <div className='addproduct-itemfeild'>
    <p>Product Title</p>
    <input type='text' value={productDetails.name} onChange={changeHandler} name='name' placeholder='Product Title' />
    </div>

    <div className='addproduct-price'>
        <div className='addproduct-itemfeild'>
            <p>Price</p>
            <input type="text" value={productDetails.old_price} onChange={changeHandler} name='old_price' placeholder='Old Price'/>
        </div>
        <div className='addproduct-itemfeild'>
            <p>Offer Price</p>
            <input  type="text" value={productDetails.new_price} onChange={changeHandler} name='new_price' placeholder='New Price'/>
        </div>
    </div>

    <div className='addproduct-itemfeild'>
        <p>Product Category</p>
        <select value={productDetails.category} onChange={changeHandler} name='category' className='add-product-selector'>
            <option value="Men">Men</option>
            {/* <option value="Men-Wedding">Men</option>
            <option value="Men-Reception">Men</option>
            <option value="Men-Assessories">Men</option> */}
            <option value="Women">Women</option>
            {/* <option value="Women-Wedding">Men</option>
            <option value="Women-Reception">Men</option>
            <option value="Women-Assessories">Men</option>
             */}
        </select>
    </div>
    <div className='addproduct-itemfeild'>
    <label htmlFor='file-input'>
    <img src={image?URL.createObjectURL(image):upload} className='addproduct-thumbnail-img' alt=''/>
    </label>
    <input onChange={imageHandler} type='file' name='image' id='file-input' hidden />
    </div>
    <button onClick={()=>{Add_Product()}} className='addproduct-btn'>Add Product</button>
    </div>
  )
}

