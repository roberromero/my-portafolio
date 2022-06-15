import './App.css';
import Header from './header/Header';
import Profile from './profile/Profile';
import Work from './work/Work';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <Profile />
        <Work />
      </div>
    </div>
  );
}

export default App;
