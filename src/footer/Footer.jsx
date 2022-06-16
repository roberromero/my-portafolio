import React from 'react'
import './Footer.css'
import github from '../img/github.png'
import linkedin from '../img/linkedin.png'
import email from '../img/email.png'

const Footer = () => {
  return (
    <footer>
      <img className='footer__contact-icon' src={github}/>
      <img className='footer__contact-icon' src={linkedin}/>
      <img className='footer__contact-icon' src={email}/>
    </footer>
  )
}

export default Footer
