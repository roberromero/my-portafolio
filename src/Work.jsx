import oxygen from './img_work/oxygenProject.png'
import moviesearch from './img_work/movie-search.png'

const Work = () => {

  return (
    <section className='work'>
      <article className='card-project'>
          <a>
            <img className='card-project__img' src={oxygen} />
          </a>
          <h3 className='work__header-paragraph'>Oxygen Project</h3>
          <p className='work__body-paragraph'>This project was created from scratch using three technologies HTML, 
            CSS and Vanilla JavaScript, no libraries have been used. Following the 
            scrum methodology and under the supervision of a CTO.
          </p>
      </article>
      <article className='card-project'>
          <a>
            <img className='card-project__img' src={moviesearch}/>
          </a>
          <h3 className='work__header-paragraph'>Movie-search-engine</h3>
          <p className='work__body-paragraph'>This project was created using Pure React. Following the 
            scrum methodology and under the supervision of a CTO. The OMDb API is used to obtain movie information.
            It has different functionalities such as add, delete and comment movies.
          </p>
      </article>
      <article className='card-project'>
          <a>
            <img className='card-project__img' src={moviesearch}/>
          </a>
          <h3 className='work__header-paragraph'>Movie-search-engine</h3>
          <p className='work__body-paragraph'>This project was created using Pure React. Following the 
            scrum methodology and under the supervision of a CTO. The OMDb API is used to obtain movie information.
            It has different functionalities such as add, delete and comment movies.
          </p>
      </article>
      <article className='card-project'>
          <a>
            <img className='card-project__img' src={moviesearch}/>
          </a>
          <h3 className='work__header-paragraph'>Movie-search-engine</h3>
          <p className='work__body-paragraph'>This project was created using Pure React. Following the 
            scrum methodology and under the supervision of a CTO. The OMDb API is used to obtain movie information.
            It has different functionalities such as add, delete and comment movies.
          </p>
      </article>

      {/* <p className="line" style={{backgroundColor:"black", marginBottom:"15px"}}></p> */}
    </section>
  )
}

export default Work
