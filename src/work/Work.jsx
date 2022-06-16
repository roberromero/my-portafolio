import React from 'react'
import './Work.css'
import oxygen from './img/OxygenProject.png'

const Work = () => {
  return (
    <section className='work'>
      <div className='card-project'>
          <a>
            <img className='card-project__img' src={oxygen}/>
          </a>
          <h3 className='header-paragraph'>Oxygen Project</h3>
          <p className='body-paragraph'>This project was created from scratch using three technologies HTML, 
            CSS and Vanilla JavaScript, no libraries have been used. Following the 
            scrum methodology and under the supervision of a CTO.
          </p>
      </div>
      <div className='card-project'>
          <a>
            <img className='card-project__img' src={oxygen}/>
          </a>
          <h3 className='header-paragraph'>Oxygen Project</h3>
          <p className='body-paragraph'>This project was created from scratch using three technologies HTML, 
            CSS and Vanilla JavaScript, no libraries have been used. Following the 
            scrum methodology and under the supervision of a CTO.
          </p>
      </div>
      <p className="line" style={{backgroundColor:"black", marginBottom:"15px"}}></p>
    </section>
  )
}

export default Work
