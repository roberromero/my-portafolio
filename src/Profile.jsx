import robertocv from './cv/cv_roberto.pdf'

const Profile = () => {


  return (
    <section className='profile'>
      <h2 className='title'>About me</h2>
      <p className='profile-paragraph'> 
        I have just completed my course “Software Developer Level 4” by QA. I am looking for an
        opportunity to boost my new career.
        During this course we covered many different technologies such as Python, PHP, MySQL and Azure.
        I am also familiarized with technologies such as XML, HTML, XHTML, CSS, Bootstrap, JavaScript,
        JQuery, Ajax, MySQL, PL/SQL, XAMPP, etc. Since I completed a Diploma of Higher Education between
        2020 and 2021.
        Tireless worker, great attention to detail, reliable, and a great communicator are some of my attributes.
        I love working in a team. I always show a high degree of 
        commitment to the assigned tasks.
        After living in the UK for more than 10 years my level of English Language is excellent, and I am
        willing to relocate if necessary.
      </p>
      <button className='buttons'><a href={robertocv} download>Download CV</a></button>
    </section>
  )
}

export default Profile
