import React from 'react'
import './Work.css'
import oxygen from './img/OxygenProject.png'

const Work = () => {
  return (
    <section className='work'>
      <h2 className='title'>Recent Work</h2>
      <a className='card-project'>
        <img src={oxygen}/>
      </a>
    </section>
  )
}

export default Work
