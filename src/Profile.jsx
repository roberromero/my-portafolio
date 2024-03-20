import robertocv from './cv/cv_roberto.pdf'

const Profile = () => {


  return (
    <section className='profile'>
      <h2 className='title'>About me</h2>
      <p className='profile-paragraph'> 
        Proficient in Laravel and ColdFusion,
        managing legacy projects and
        developing modern solutions. Skilled in
        bug fixing, feature additions, and project
        enhancements. Engages in Agile Scrum,
        collaborates in daily stand-ups, and
        coordinates with senior developers.
        Familiar with Docker for streamlined
        project deployment. Current focus on
        back-end development while
        maintaining a comprehensive full-stack
        skill set. GitLab, Subversion, GitHub, and
        Microsoft Teams for efficient version
        control and communication. Proven
        track record in delivering high-quality
        projects within agreed timelines
      </p>
      <button className='buttons'><a href={robertocv} download>Download CV</a></button>
    </section>
  )
}

export default Profile
