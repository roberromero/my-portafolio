import robertocv from './cv/robertocv.pdf'

const Profile = () => {


  return (
    <section className='profile'>
      <h2 className='title'>About me</h2>
      <p className='profile-paragraph'> 
        I am a qualified Full Stack Web Developer
        with experience in website design with strong creative
        and analytical skills.
      </p>
      <button className='buttons'><a href={robertocv}>Download CV</a></button>
    </section>
  )
}

export default Profile
