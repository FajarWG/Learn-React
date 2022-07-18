import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {

  const [title, setTitle] = useState("Welcome to My App");
  const [age, setAge] = useState(20);
  const [product, setProduct] = useState([
    {id: 1, title: "Produk 1", price: 200},
    {id: 2, title: "Produk 2", price: 400},
    {id: 3, title: "Produk 3", price: 200},
    {id: 4, title: "Produk 4", price: 700},
  ]);

  const [text, setText] = useState("");

  const clickMe = () => {
    setTitle("Title Changed");
    setAge(40);
  }

  const deleteData = (productId) =>{
    const newData = product.filter(product => product.id!== productId);
    setProduct(newData);
  }

  const [klik, setKlik] = useState(0);
  const clickUP = () => {
    setKlik(klik + 1)
  }

  useEffect(() => {
    localStorage.setItem("Total Klik", klik)
  },[klik]);

  return (
    <div>
      <Header />
      <h2>{ title }</h2>
      <h2>Age : { age }</h2>
      
      {klik > 10 ? 
        <div> 
          Total klik : {localStorage.getItem("Total Klik")} 
          <button onClick={() => setKlik(0)}>Reset</button>
        </div> : 
        klik
      }

      <button onClick={ clickUP }>Click Me</button>
      <br></br>
      <input onChange={e => setText(e.target.value)}></input>

      <ProductList product={product} deleteData={deleteData}/>
    </div>
  );
}

export default App;
