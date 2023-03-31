import oxygen from './img_work/oxygenProject.png'
import moviesearch from './img_work/movie-search.png'
import ojalaAcademy from './img_work/ojala-academy.png'
import toDoList from './img_work/toDoList.png'
import coCalories from './img_work/co-calories.png' 
import blogPhp from './img_work/blog_php.png'
const Work = () => {

  return (
    <section className='work'>
      <article className='card-project'>
          <a href='https://roberromero.github.io/proyectoOxygen/'>
            <img className='card-project__img' src={oxygen} />
          </a>
          <h3 className='work__header-paragraph'>Oxygen Project</h3>
          <p className='work__body-paragraph'>This project was created from scratch using three technologies HTML, 
            CSS and Vanilla JavaScript, no libraries have been used. Following the 
            scrum methodology and under the supervision of a CTO.
          </p>
      </article>
      <article className='card-project'>
          <a href='https://roberromero.github.io/movie-search/'>
            <img className='card-project__img' src={moviesearch}/>
          </a>
          <h3 className='work__header-paragraph'>Movie-search-engine</h3>
          <p className='work__body-paragraph'>This project was created using Pure React. Following the 
            scrum methodology and under the supervision of a CTO. The OMDb API is used to obtain movie information.
            It has different functionalities such as add, delete and comment movies.
          </p>
      </article>
      <article className='card-project'>
          <a href='https://ojala-spanishacademy.co.uk/'>
            <img className='card-project__img' src={ojalaAcademy}/>
          </a>
          <h3 className='work__header-paragraph'>Ojalá Spanish Academy</h3>
          <p className='work__body-paragraph'>This project was created using 
          Godaddy Website Builder. It may not serve to show my skills as a programmer, but 
          it does show my other facet, as a entrepreneur. That is how I currently make a living. 
          I have this small company, I manage and organize it 
          myself with the help of collaborators. I teach and deal with clients and their needs.
          </p>
      </article>
      <article className='card-project'>
          <a href='#'>
            <img className='card-project__img' src={coCalories}/>
          </a>
          <h3 className='work__header-paragraph'>Co-Calories App</h3>
          <p className='work__body-paragraph'>This is a Web Application created using technologies suh as CSS, 
          React, PHP and MySQL.
          The user can search for recipes and save them permanently.
          It gets recipes information from "spoonacular" API.
          </p>
      </article>
      <article className='card-project'>
          <a href='#'>
            <img className='card-project__img' src={blogPhp}/>
          </a>
          <h3 className='work__header-paragraph'>Blog Php</h3>
          <p className='work__body-paragraph'>This is a blog created technologies such as Bootstrap, 
          Vainilla JavaScript, PHP and MySQL.
          There are three relational tables in the database.
          The user can sign in, sign up, add posts, edit posts and delete them.
          This app also stores files.
          </p>
      </article>
      <article className='card-project'>
          <a href='#'>
            <img className='card-project__img' src={toDoList}/>
          </a>
          <h3 className='work__header-paragraph'>"To Do" List</h3>
          <p className='work__body-paragraph'>This simple "to do" List App was created using 
          Pure React. It was my first App using Pure React. 
          In order to access the database of the list it is necessary to simulate an external 
          server. To simulate the access, the fetch API and the post and delete methods are used.
          </p>
      </article>
      {/* <p className="line" style={{backgroundColor:"black", marginBottom:"15px"}}></p> */}
    </section>
  )
}

export default Work
