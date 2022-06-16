import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <h3>Get In Touch</h3>
      <div className='container-form'>
        <form>
            <input className='form-item' type="text" name='Name' placeholder='Name'/>
            <input className='form-item' type="email" name="Email" id="email" placeholder='Email'/>
            <textarea className='form-item' name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
            <button className='form-item buttons' type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
