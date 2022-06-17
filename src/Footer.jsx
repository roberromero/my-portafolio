import github from './img/github.png'
import linkedin from './img/linkedin.png'
import email from './img/email.png'
import swal from 'sweetalert';

const Footer = () => {

  const handleEmail = ()=> {
    swal("robertoromerodeveloper@gmail.com");
  }
  return (
    <footer>
      <a href="https://github.com/roberromero"><img className='footer__contact-icon' src={github}/></a>
      <a href="https://www.linkedin.com/in/roberto-romero-martin-204939230/"><img className='footer__contact-icon' src={linkedin}/></a>
      <img style={{cursor:'pointer'}} className='footer__contact-icon' src={email} onClick={handleEmail}/>
      <p> Created by Roberto Romero</p>
    </footer>
  )
}

export default Footer
