import email from './img/email.png';
import smartphone from './img/smartphone.png';
import home from './img/home.png';

const Contact = () => {
  return (
    <section className='contact'>
      <h3 className='title'>Get In Touch</h3>
      <div className='container-form'>
        <form action='robertoromerodeveloper@gmail.com'>
            <input className='form-item' type="text" name='Name' placeholder='Name'/>
            <input className='form-item' type="email" name="Email" id="email" placeholder='Email'/>
            <textarea className='form-item' name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
            <button className='form-item buttons' type="submit">Send Message</button>
        </form>
        <div>
          <img src={home} className='contactIcon' alt='home icon'/><p>York,UK</p>
          <img src={smartphone} className='contactIcon' alt='smatphone icon'/><p>+447867060691</p>
          <img src={email} className='contactIcon' alt='email icon'/><p>robertoromerodeveloper@gmail.com</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
