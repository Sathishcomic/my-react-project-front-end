import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Product from './product';

const Rout = ({product,setProduct}) => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product' element={<Product product = {product} setProduct = {setProduct}/>}/>
        </Routes>
    </div>
  )
}

export default Rout;