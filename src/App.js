import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./views/Home"
import About from "./views/About"
import Product from "./views/Product"
import AddProducts from "./components/CRUD/AddProducts"
import EditProducts from "./components/CRUD/EditProducts"

function App() {

  return (
  <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/addproduct" element={<AddProducts />} />
            <Route path="/editproduct/:id" element={<EditProducts />} />
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
