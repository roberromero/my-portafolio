import oxygen from './img_work/oxygenProject.png'
import moviesearch from './img_work/movie-search.png'
import ojalaAcademy from './img_work/ojala-academy.png'
import ospaIntApp from './img_work/ospa-int-app.png'
import coCalories from './img_work/co-calories.png' 
import blogPhp from './img_work/blog_php.png'
/*Images need to be 1900x925*/
const Work = () => {

  return (
    <section className='work'>
      <article className='card-project'>
          <a href='https://roberromero.github.io/proyectoOxygen/'>
            <img className='card-project__img' src={oxygen} />
          </a>
          <h3 className='work__header-paragraph'>Oxygen Project</h3>
          <p className='work__body-paragraph'>This project was created from scratch using three technologies <span className='tech_bold'>HTML, 
            CSS and Vanilla JavaScript</span>, no libraries have been used. Following the 
            scrum methodology and under the supervision of a CTO.
          </p>
      </article>
      <article className='card-project'>
          <a href='https://roberromero.github.io/movie-search/'>
            <img className='card-project__img' src={moviesearch}/>
          </a>
          <h3 className='work__header-paragraph'>Movie-search-engine</h3>
          <p className='work__body-paragraph'>This project was created using <span className='tech_bold'>Pure React.</span> Following the 
            scrum methodology and under the supervision of a CTO. The <span className='tech_bold'>OMDb API</span> is used to obtain movie information.
            It has different functionalities such as add, delete and comment movies.
          </p>
      </article>
      <article className='card-project'>
          <a href='https://robertoromero.co.uk/co-calories-app'>
            <img className='card-project__img' src={coCalories}/>
          </a>
          <h3 className='work__header-paragraph'>Co-Calories App</h3>
          <p className='work__body-paragraph'>Web Application created using technologies such as <span className='tech_bold'>CSS, React, PHP and MySQL.</span>
          The user can search for recipes and save them permanently.
          It gets recipes information from "spoonacular" API and it has responsive design implemented (mobile first design).          
          </p>
      </article>
      <article className='card-project'>
          <a href='https://robertoromero.co.uk/blog_php'>
            <img className='card-project__img' src={blogPhp}/>
          </a>
          <h3 className='work__header-paragraph'>Blog</h3>
          <p className='work__body-paragraph'>Blog created using technologies such as <span className='tech_bold'>Bootstrap, Vainilla JavaScript, PHP and MySQL.</span>
          There are three relational tables in the database.
          The user can sign up, sign in, add posts, edit posts and delete them. This app also stores files.         
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
          <a href='https://ojalaspanishacademy.co.uk/'>
            <img className='card-project__img' src={ospaIntApp}/>
          </a>
          <h3 className='work__header-paragraph'>Internal Ojalá Spanish Academy App</h3>
          <p className='work__body-paragraph'>
            Internal app created for managing various aspects of a language academy. 
            The application was developed using <span className='tech_bold'>Laravel 10 and Livewire</span>.
          </p>
          <ul className='work__body-paragraph p-l12'>
            <li className='bullet'>Maintained records of students including personal data, academic progress, and lessons covered.</li>
            <li className='bullet'>Added interested individuals to the academy database to facilitate sending offers and updates.</li>
            <li className='bullet'>Oversaw both group and individual lesson schedules and progress.</li>
            <li className='bullet'>Managed invoices, recorded payments, and set up alerts for pending payments.</li>
            <li className='bullet'>Facilitated the generation of invoices and Excel documents for reporting purposes.</li>
         </ul>
      </article>
      {/* <p className="line" style={{backgroundColor:"black", marginBottom:"15px"}}></p> */}
    </section>
  )
}

export default Work
