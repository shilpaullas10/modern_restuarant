import React from 'react';
import './Footer.css';
import { FiFacebook,FiTwitter,FiInstagram } from "react-icons/fi";
import { images } from '../../constants';

const Footer = () => {
  return (
    <div className='app__footer'>
        <div className='app__footer-links'>
          <div className='app__footer-links_contact'>
            <h1 className='app__footer-headtext'>Contact Us</h1>
            <p className='p__opensans'>#9, 5th Street, NewYork, NY USA</p>
            <p className='p__opensans'>+1 212 544 1234</p>
            <p className='p__opensans'>+1 231 988 7865</p>
          </div>
          <div className='app__footer-links_logo'>
            <img src={images.meridian} alt='footer_logo' />
            <p className='p__opensans'>"The best way to find yourself is to lose youself in service of others"</p>
            <img src={images.spoon} alt='spoon_img' style={{marginTop:15}} />

            <div className='app__footer-links_icons'>
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
            </div>

          </div>
          <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>Working Hours</h1>
            <p className='p__opensans'>Monday-Friday:</p>
            <p className='p__opensans'>08:00 am - 12:00 am</p>
            <p className='p__opensans'>Saturday-Sunday:</p>
            <p className='p__opensans'>07:00 am - 11:00 pm</p>
          </div>
        </div>
        <div className='footer__copyright'>
          <p className='p__opensans'>2024 Meridian. All Rights reserved</p>
        </div>
    </div>
  )
}

export default Footer