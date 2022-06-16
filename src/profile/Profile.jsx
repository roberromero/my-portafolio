import './Profile.css'
import robertocv from '../cv/robertocv.pdf'

const Profile = () => {

  return (
    <section className='profile'>
      <h2 className='title'>About me</h2>
      <p className='header-paragraph'> 
        I am a qualified Full Stack Web Developer
        with experience in website design with strong creative
        and analytical skills.
      </p>
      <a href={robertocv}><button className='buttons'>Download CV</button></a>
    </section>
  )
}

export default Profile
