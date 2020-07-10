import React from 'react';
import logo from './logo.svg';
//import eaglePic from './eagle-photo.jpg';
import './App.css';
import './App.scss';


function App() {
  return (
      <div className="App">

      {/*<h1>Hello World!!!!!! zip55</h1>*/}
      <header className="App-header">
      <div className="Hero-header">
        <h1>FC</h1>
        <h1> |</h1>
        <h1>.</h1>
        <h1>.</h1>
        <h1>.</h1>
      </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */  }
      <div className="My-bio">
        <h1>En quelques mots...</h1>
      </div>
        <p>------------------------------</p>
        <p>Pour le passage de Atom/Local à Hostinger/Online, suivre ce lien :</p>
        <a
        className="App-link"
        href="https://medium.com/@kmchaplain/deploying-a-react-application-on-hostinger-cf2c6c43b072"
        target="_blank"
        rel="noopener noreferrer"
        >
        Deploying a React Application on Hostinger
        </a>
        <p>------------------------------</p>

          <p>Pour React Multi pages, suivre ce lien :</p>
          <a
          className="App-link"
          href="https://reactrouter.com/web/guides/quick-start"
          target="_blank"
          rel="noopener noreferrer"
          >
          React Router: Declarative Routing for React.js - React Training
          </a>
          <p>------------------------------</p>

          <p> To start, go on cmd and do "d:" then "cd react-for-host" and finally "npm start"</p>


          <p>------------------------------</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



export default App;
