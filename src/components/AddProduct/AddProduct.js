import React from 'react';
import './AddProduct.css'
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
        })
    }
  
    return (
        <div>
            <h3>Please add Product</h3>
            
    <form className='add-product input' onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='Product Name' {...register("name", { required: true})} /> <br />
      <input placeholder='Price' type="number" {...register("price")} /><br />
      <input  placeholder='Supplier' {...register("supplier")} /><br />
      <input  placeholder='Description' {...register("description")} /><br />
      <input  placeholder='Image URL' {...register("img")} /><br />
      
      <input className='p-up-btn' type="submit" value="Add Product" />
    </form>

        </div>
    );
};

export default AddProduct;