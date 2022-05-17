
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import useProducts from '../../hooks/UseProducts';
import './ManageInventory.css'

const ManageInventory = () => {
    const [products, setProducts] = useProducts();
    const [quantity, setQuantity] = useState()

    
const handleDecrement = () =>{
   
  

    
}
const handleIncrement =() => {
    setQuantity(prevCount => prevCount + 1);
}
    const handleDelevery  = id => {
        // const handleDelivery = event => { event.preventDefault();
            // const deliveryInventoryItem = inventoryItem.quantity(quantity-1);
    }


    const handleDelete = id => {
      const proceed = window.confirm('Are Your Sure?');
      if(proceed){
          const url =`http://localhost:5000/product/${id}`;
          fetch(url, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              const remaining = products.filter(product => product._id !==id);
              setProducts(remaining);

          })
      }
    }
  

    return (
        <div className=''>
            <h2 className='product-title'>All Products {products.length} </h2>
            <div>

            </div>
            <div>

                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Prodct Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Supplier</th>
                            <th colSpan={2}>Edit</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map(product => <tr
                                key={product._id}
                                product={product}>
                                <td><img src={product.img} alt="" /> </td>
                                <td>{product.name}</td>
                                <td> {product.price}</td>
                                <td>
                                    <button onClick={handleDecrement}>-</button>
                                   
                                    {product.quantity}
                                    <button onClick={handleIncrement}>+</button>

                                   
                                    </td>
                                <td>{product.supplier}</td>
                                <td><button className='manage-btn' onClick={()=> handleDelete(product._id)}>Delete</button></td>
                                <td><button className='manage-btn' onClick={()=> handleDelevery()}>Delivered</button></td>
                            </tr>
                            )
                        }
                    </tbody>
                </Table>

            </div>

            <button className='add-product-link'><Link to='/addproduct'>Add Product</Link></button>
        </div>
    );
};

export default ManageInventory;