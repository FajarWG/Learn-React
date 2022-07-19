import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const response = await fetch('http://localhost:9999/Products');
    const data = await response.json()
    setProducts(data);
  }

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:9999/Products/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    fetchData();
  }

  return (
    <div>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index+1}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <Link to={`/editproduct/${product.id}`}>
                    <button>Edit</button>
                  </Link>
                  <button onClick={() => deleteProduct(product.id)}>Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default Products