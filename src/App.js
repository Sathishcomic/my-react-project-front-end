import React,{useState} from 'react';
import './App.css';
import Nav from './nav';
import {BrowserRouter} from 'react-router-dom';
import Rout from './rout';
import Footer from './footer';
import Product from './product';
import Productdetail from './productdetail';

function App() {
  const [product,setProduct] = useState(Productdetail)
    function SearchBtn(search) {
        console.log(search);
        const filteredProducts = Productdetail.filter((x) =>
            x.Cat.toLowerCase().includes(search.toLowerCase())
        );
        setProduct(filteredProducts);
    }
  return (
    <>
      <BrowserRouter>
      <Nav SearchBtn={SearchBtn}/>
      <Rout product = {product} setProduct = {setProduct}/>
      <Product/>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
