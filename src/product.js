import React, { useState } from 'react';
import Productdetail from './productdetail';
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import './product.css';

    const Product = () => {

    const [product , setProduct] = useState(Productdetail)
        const FilterProduct = (product) => {
            const updatedProducts = Productdetail.filter((x) =>
                x.Cat.toLowerCase().includes(product.toLowerCase())
            );
            setProduct(updatedProducts);
        }
   const AllProducts = () => {
    setProduct(Productdetail);
   }
  return (
    <>
    <div className='products'>
    <h2># Products</h2>
    <p>Home . products</p>
        <div className='container'>
            <div className='filter'>
                <div className='categories'>
                    <h3>Categories</h3>
                    <ul>
                        <li onClick={AllProducts}>All Products</li>
                        <li onClick={() => FilterProduct ("Tablet")}>Tablet</li>
                        <li onClick={() => FilterProduct ("PS4")}>PS4</li>
                        <li onClick={() => FilterProduct ("Sony T.V")}>Sony T.V</li>
                        <li onClick={() => FilterProduct ("Home Theater")}>Home Theater</li>
                        <li onClick={() => FilterProduct ("Smart Watch")}>Smart Watch</li>
                        <li onClick={() => FilterProduct ("IPhone")}>IPhone</li>
                        <li onClick={() => FilterProduct ("Realme")}>Realme</li>
                        <li onClick={() => FilterProduct ("Boult")}>Boult</li>
                        <li onClick={() => FilterProduct ("OnePlus")}>OnePlus</li>
                    </ul>
                </div>
            </div>
            <div className='productbox'>
                <div className='contant'>
                    {
                        product.map((curElm) =>{
                            return(
                                <>
                                <div className='box' key={curElm.id}>
                                    <div className='img_box'>
                                        <img src={curElm.img} alt={curElm.Title}></img>
                                        <div className='icon'>
                                            <li><IoCartOutline /></li>
                                            <li><FaRegEye /></li>
                                            <li><FaRegHeart /></li>
                                        </div>
                                    </div>
                                    <div className='detail'>
                                        <p>{curElm.Cat}</p>
                                        <h3>{curElm.Title}</h3>
                                        <h4>{curElm.Price}</h4>
                                    </div>
                                </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product