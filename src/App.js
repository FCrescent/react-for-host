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
      {/*
      <div className="Top-bar">
        <div>
          7 Rules for Website Color Schemes
        </div>
        <div>
          Accès Rapide
        </div>
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
        </div>{/*FIN NAV MENU}
      </div>{/*FIN TOP BAR}
      */}
      {/*<h1>Hello World!!!!!! zip55</h1>*/}
      <header className="App-header">
      <div className="Hero-section">
        <img src={gearSymbol} className="Rotating-gear" alt="logo" />
        <img src={gearSymbol} className="Rotating-gear" alt="logo" />
        <div className="Hero-central">
          <div className="Hero-central-up">
            <h1>FC</h1>
            <h1> |</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
          </div>
          <div className="Hero-central-down">
            <div className="Nav-button">
              <img src={fastSymbol} alt="man running" />
              <h3>Accès rapide</h3>

            </div>
          </div>
        </div>
      </div>
      <div className="Parallax-home">
        <div className="Layer">
          <h1>ABOUT ...</h1>
        </div>
      </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */  }
      <div className="My-bio">
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
        <p> Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
        <p><span>Photo by <a href="https://unsplash.com/@itfeelslikefilm?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">🇸🇮 Janko Ferlič</a> on <a href="https://unsplash.com/s/photos/library?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></p>

      </header>
    </div>
  );
}



export default App;
