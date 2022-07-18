const ProductList = ({product, deleteData}) => {
  return (
    <div>
        <ul>
            { product.map((product) => (
            <li key={product.id} > 
                {product.title} - {product.price}
                <button onClick={() => deleteData(product.id)}>Hapus</button>
            </li>
            )) }
        </ul>
    </div>
  )
}

export default ProductList