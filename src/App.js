import './App.css';
import navbar from './photos/navbar.png'
import leftbar from './photos/leftbar.png'
import herdman from './photos/Herdman.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="website-navbar" src={navbar} alt="herdman navbar"/>
        <div className='leftbar-content'>
          <img className="website-leftbar" src={leftbar} alt="herdman leftbar"/>
          <div className='content-box'>
            <img className="herdman-pic" src={herdman} alt="John Herdman"/>
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
