import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const AddProducts = () => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const navigate = useNavigate()

    const saveProduct = async (e) => {
        e.preventDefault();
        const product = { title, price}
        await fetch('http://localhost:9999/Products', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        navigate('/product');
    }

  return (
    <div>
        <form onSubmit={saveProduct}>
            <div>
                <label>Title</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            </div>
            <div>
                <label>Price</label>
                <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
            </div>
            <div>
                <button>Save</button>
            </div>
            <p> {title} - {price}</p>
        </form>
    </div>
  )
}

export default AddProducts