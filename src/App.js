import './App.css';
import navbar from './photos/navbar.png'
import leftbar from './photos/leftbar.png'
import herdman from './photos/Herdman.jpg'
import { useState } from 'react';

function App() {

  const [currentPage, setCurrentPage] = useState("first")

  const firstScreen = (
    <div className='firstScreen'>
      <div className='firstScreen-textandpic'> 
        <div className='intro-textbox'>
          <p> Dr. John Herdman from HerdmanHealth</p>
          <h2> Hi, I'm John from HerdmanHealth. Thank you for deciding to go forward with our app. </h2>
          <h2> I'm here to help you use this app and streamline your assessments.</h2>
        </div>
        <div>
          <img className="herdman-pic" src={herdman} alt="John Herdman"/>
        </div>

      </div>
      
      
      
      <button type='button' className='get-started-button' onClick={() => setCurrentPage("second")}> Get Started! </button>

    </div>

  )

  const secondScreen = (
    <div>

    </div>
  )



  return (
    <div className="App">
      <header className="App-header">
        <img className="website-navbar" src={navbar} alt="herdman navbar"/>
        <div className='leftbar-content'>
          <img className="website-leftbar" src={leftbar} alt="herdman leftbar"/>
          <div className='content-box'>
            { currentPage === "first" ? firstScreen : secondScreen }
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
