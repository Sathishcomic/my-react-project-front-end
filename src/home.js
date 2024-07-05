import React from 'react'
import { Link } from 'react-router-dom';
import './home.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { FiTruck } from "react-icons/fi";
import { FaDollarSign } from "react-icons/fa";
import { AiOutlinePercentage } from "react-icons/ai";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import Homeproduct from './homeproduct';

const Home = () => {
  return (
    <>
    <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2>The Best Note Book Collection In 2023</h2>
                <Link to="/product" className='link'>Shop Now <FaArrowRightLong /></Link>
            </div>
            <div className='img_box'>
                <img src='https://www.91-cdn.com/hub/wp-content/uploads/2021/10/GALAXY-TAB-S8-ULTRA-5K2.jpg' width={440}></img>
            </div>
        </div>
    </div>
    <div className='product_type'>
        <div className='container'>
            <div className='box'>
                <div className='img_box'>
                    <img src='https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-492660-sm-s928bzocins-539573814?$650_519_PNG$'></img>
                </div>
                <div className='detail'>
                    <p>23 products</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src='https://www.gonoise.com/cdn/shop/products/Icon2-5.png?v=1681610912'></img>
                </div>
                <div className='detail'>
                    <p>46 products</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710332950/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/305511_zpspbj.png'></img>
                </div>
                <div className='detail'>
                    <p>52 products</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710437624/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/305520_i2jbrk.png?tr=w-600'></img>
                </div>
                <div className='detail'>
                    <p>43 products</p>
                </div>
            </div>
        </div>
    </div>
    <div className='about'>
        <div className='container'>
            <div className='box'>
                <div className='icon'>
                <FiTruck />
                </div>
                <div className='detail'>
                    <h3>Free Shipping</h3>
                    <p>Order above $1000</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                <FaDollarSign />
                </div>
                <div className='detail'>
                    <h3>Return & Refund</h3>
                    <p>Money Back Gaurenty</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                <AiOutlinePercentage />
                </div>
                <div className='detail'>
                    <h3>Member Discount</h3>
                    <p>Order</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                <FaHeadphonesSimple />
                </div>
                <div className='detail'>
                    <h3>Custome Support</h3>
                    <p>Every Time Call Support</p>
                </div>
            </div>
        </div>
    </div>
    <div className='product'>
        <h2>Top Products</h2>
        <div className='container'>
            {
                Homeproduct.map((curElm) => 
                {
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
    <div className='banner'>
        <div className='container'>
        <div className='detail'>
            <h4>LATEST TECHNOLOGY ADDED</h4>
            <h3>Apple iPad 10.2inch 9th Gen - 2024</h3>
            <p>$986</p>
            <Link to='/product' className='link'>Shop Now<FaArrowRightLong/></Link>
        </div>
        <div className='img_box'>
            <img src='https://www.91-cdn.com/hub/wp-content/uploads/2021/10/GALAXY-TAB-S8-ULTRA-5K2.jpg' width={440}></img>
        </div>
        </div> 
    </div>
    </>
  )
}

export default Home;