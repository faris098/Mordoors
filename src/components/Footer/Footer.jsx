import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
<img src={assets.logo} alt="" className='logo'/>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quisquam modi eius cumque officia ipsam temporibus recusandae maiores necessitatibus? Nesciunt repellat est suscipit cum voluptatem inventore! Pariatur temporibus beatae ullam!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
                </div>

                 <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
<h2>GET IN TOUCH</h2>
<ul>
    <li>+91 987-654-321-000</li>
    <li>+91 987-654-321-001</li>
    <li>contact@mordoors.com</li>
    <li>help@mordoors.com</li>
</ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2025 © Mordoors.com  ™ - All Right Reserved. </p>
        </div>
    )
}



export default Footer