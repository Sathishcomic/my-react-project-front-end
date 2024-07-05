import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import './footer.css';

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='about'>
                <div className='logo'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Shopify_Logo.png" width={100} />
                </div>
                <div className='detail'>
                    <p>We are team of designers that create high quality WordPress.</p>
                    <div className='icon'>
                        <li><FaSquareFacebook /></li>
                        <li><FaInstagram /></li>
                        <li><FaXTwitter /></li>
                        <li><FaYoutube /></li>
                    </div>
                </div>
            </div>
            <div className='page'>
                <h3>My Account</h3>
                <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>Shipping</li>
                    <li>Return</li>
                </ul>
            </div>
            <div className='page'>
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terms & Condition</li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer