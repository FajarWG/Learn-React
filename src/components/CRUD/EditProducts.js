import React, { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';

const EditProducts = () => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const navigate = useNavigate()
    const { id } = useParams();

    const getProductbyId = async () => {
        const response = await fetch(`http://localhost:9999/Products/${id}`)
        const data = await response.json()
        setTitle(data.title)
        setPrice(data.price)
    }

    useEffect(() => {
        getProductbyId();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const updateProduct = async (e) => {
        e.preventDefault();
        const product = { title, price}
        await fetch(`http://localhost:9999/Products/${id}`, {
            method: 'PUT',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        navigate('/product');
    }

  return (
    <div>
        <form onSubmit={updateProduct}>
            <div>
                <label>Title</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            </div>
            <div>
                <label>Price</label>
                <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
            </div>
            <div>
                <button>Update</button>
            </div>
        </form>
    </div>
  )
}

export default EditProducts