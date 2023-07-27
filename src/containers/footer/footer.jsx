import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-links'>
        <div className='footer-links-container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#legal-services'>Legal Services</a></p>
          <p><a href='#about-us'>About Us</a></p>
          <p><a href='#contact'>Contact</a></p>
        </div>
        <div className='footer-social'>
          <a href='www.facebook.com' className='footer-facebook'><AiFillFacebook /></a>
          <a href='www.instagram.com' className='footer-instagram'><AiFillInstagram /></a>
          <a href='www.twitter.com' className='footer-twitter'><AiFillTwitterCircle /></a>
        </div>
      </div>
      <div className='footer-line'>
        <hr />
      </div>
      <div className='footer-rights'>
        <div className='footer-right-container'>
          <p>© patel & bhana. All rights reserved</p>
        </div>
        <div className='footer-tos'>
          <p><a href='#tos'>Terms of Service</a></p>
          <p><a href='#privacy'>Privacy Policy</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer