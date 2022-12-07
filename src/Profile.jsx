import robertocv from './CV_ROBERTO.png'

const Profile = () => {


  return (
    <section className='profile'>
      <h2 className='title'>About me</h2>
      <p className='profile-paragraph'> 
        I am a qualified Full Stack Web Developer
        with experience in website design with strong creative
        and analytical skills.
        I would define myself as a tireless worker, with great 
        attention to detail, reliable, a great communicator and 
        I love working in a team. I always show a high degree of 
        commitment to the assigned tasks.
        In addition to the technologies that I use on a daily basis 
        and that appear in the header, I am also familiarised with technologies 
        such as XML, XHTML, JUnit, JQuery, Ajax, Java, C#, XAMPP, etc.
      </p>
      <button className='buttons'><a href={robertocv}>Download CV</a></button>
    </section>
  )
}

export default Profile
