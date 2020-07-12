import React from 'react';
//import logo from './logo.svg';
import fastSymbol from './fast.svg';
import gearSymbol from './gear-symbol.svg';
//import eaglePic from './eagle-photo.jpg';
import './App.css';
import './App.scss';


function App() {
  return (
      <div className="App">
          <div className="Nav-menu">
          <a href="#">
            <span class="square">
              <img src={fastSymbol} alt="man running" />
            </span>
          </a>
          <ul>
              <li>Up !</li>
              <li>About</li>
              <li>Des liens </li>
              <li></li>
            </ul>
          </div>
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
        <h1>En quelques mots!</h1>
        <p>
          <a
            href="https://typologieanalytique.com/"
            target="_blank"
          >
          Typologue-analyste</a>
        </p>
        {/*METTRE UN rotating gear pas loin*/}
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
        <h3>Le protocole en détails : </h3>
        <ol>
          <li>Git commit & push depuis "react-for-host"</li>
          <li>A partir de cmd/"react-for-host" >>> npm run build</li>
          <li>copy-paste les éléments du build dans "react-for-host-build"</li>
          <li>Ouvrir Atom/Ouvrir folder "build"</li>
          <li>Git commit & push depuis "react-for-host-build"</li>
          <li>Go Hostinger -puis- "Git" -puis- Click "Déployer"</li>
        </ol>

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

          <p> To start the local coding, go on cmd and do "d:" then "cd react-for-host" and finally "npm start"</p>


          <p>------------------------------</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p>------------------------------</p>
        <p> Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
      </header>
    </div>
  );
}



export default App;
