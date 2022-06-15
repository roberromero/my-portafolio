import React, { useState } from 'react'
import './Header.css'
import html from './img/html5.png';
import css from './img/css-3.png';
import js from './img/js.png';
import atom from './img/atom.png';
import php from './img/php.png';
import mysql from './img/mysql.png';
import redux from './img/redux.svg';
import nodejs from './img/nodejs.png';

const Header = () => {
    const technologies = [html, css, js, atom, php, mysql];
    
  return (
    <header>
        <h1 id='name'>Roberto Romero</h1>
        <div className='container-header'>
            <p className='header-paragraph'>Known technologies</p>
            <div className='container__tech-logos'>
                {
                    technologies.map((img, index)=> {
                        return <img className='tech-logos' src={img} key={index}/>
                    })
                }
            </div>
        <p className='line'></p>
        <p className='header-paragraph'>Learning ...</p>
        <div className='container__tech-logos'>
            <img className='tech-logos' src={redux}/>
            <img className='tech-logos' src={nodejs}/>
        </div>
            <p className='header-paragraph'> 
                I am a qualified and professional web developer
                with experience in website design. Strong creative
                and analytical skills. I am currently building Apps to
                learn how to use efficiently Redux and Node.js
            </p>
            <button>Download CV</button>
        </div>
    </header>
  )
}

export default Header
