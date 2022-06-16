//STYLES
import './App.css';

//IMAGES
import html from './img/html5.png';
import css from './img/css-3.png';
import js from './img/js.png';
import atom from './img/atom.png';
import php from './img/php.png';
import mysql from './img/mysql.png';
import redux from './img/redux.svg';
import nodejs from './img/nodejs.png';

//COMPONENTS
import Header from './header/Header';
import Profile from './profile/Profile';
import Work from './work/Work';
import Contact from './contact/Contact';
import Footer from './footer/Footer';

function App() {
  const technologiesKnown = [html, css, js, atom, php, mysql];
  const technologiesInProgress = [redux, nodejs];
  

  return (
    <div className="App">
      <Header technologiesKnown={technologiesKnown} technologiesInProgress={technologiesInProgress}/>
      <div className='main'>
        <Profile />
        <h2 className='title'>Recent Work</h2>
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
