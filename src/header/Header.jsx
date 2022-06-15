import React, { useState } from 'react'
import './Header.css'
import html from './img/html5.png';
import css from './img/css-3.png';
import js from './img/js.png';
import atom from './img/atom.png';
import php from './img/php.png';
import mysql from './img/mysql.png';

const Header = () => {
    const technologies = [html, css, js, atom, php, mysql];

  return (
    <header>
        <div className='container-header'>
            {
                technologies.map((img, index)=> {
                     return <img className='tech-logos' src={img} key={index}/>
                })
            }
            <p> 
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
