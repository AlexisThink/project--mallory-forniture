import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import request from 'superagent'
import './app.css'

//COMPONENTS
import about from './components/about/About'
import terms from './components/terms/Terms'

import bedroom from './components/bedroom/Bedroom'
import desks from './components/desks/Desks'
import home from './components/home/Home'
import misc from './components/misc/Misc'
import seating from './components/seating/Seating'
import storage from './components/storage/Storage'
import tables from './components/tables/Tables'

//RESOURCES
import logo from './images/mf-logo-white.svg'
import logo_black from './images/mf-logo-black.svg'
import instagram from './images/networks/instagram.png'
import twitter from './images/networks/twitter.png'
import pinterest from './images/networks/pinterest.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="header__logo">
            <img src={logo} alt="MF Logo"/>
          </div>
          <div className="header__info">
            <Link to="/about">About</Link>
            <Link to="/terms">Terms + Conditions</Link>
          </div>
          <div className="header__divider"></div>
          <nav className="header__nav">
            <Link to="/">All</Link>
            <Link to="/seating">Seating</Link>
            <Link to="/tables">Tables</Link>
            <Link to="/desks">Desks</Link>
            <Link to="/storage">Storage</Link>
            <Link to="/bedroom">Bedroom</Link>
            <Link to="/misc">Misc</Link>
          </nav>
          <div className="header__divider"></div>
          <div className="header__car">
          <i class="material-icons">shopping_cart</i>
          </div>
        </div>
        <div className="container">
          <Switch>
            <Route exact path="/about" component={about} />
            <Route exact path="/terms" component={terms} />

            <Route exact path="/" component={home} />
            <Route exact path="/seating" component={seating} />
            <Route exact path="/tables" component={tables} />
            <Route exact path="/desks" component={desks} />
            <Route exact path="/storage" component={storage} />
            <Route exact path="/bedroom" component={bedroom} />
            <Route exact path="/misc" component={misc} />
          </Switch>
        </div>
        <div className="footer">
          <div className="footer__logo">
            <img width='80px' height="80px"  src={logo_black}/>
          </div>
          <div className="footer__divider"></div>
          <div className="footer__info">
            <div className="footer__info__links">
              <div className="footer__info__links__company">
                <h4>Company</h4>
                <p>About</p>
                <p>Press</p>
                <p>Terms + Conditions</p>
              </div>
              <div className="footer__info__links__categories">
                <h4>Categories</h4>
                <p>Seting</p>
                <p>Tables</p>
                <p>Misc</p>
              </div>
            </div>
            <div className="footer__info__networks">
              <h4>Social</h4>
              <div className="footer__info__networks__icons">
                <img width='25px' height="25px" src={instagram} alt="Instagram Logo" />
                <img width='25px' height="25px" src={twitter} alt="Twitter Logo" />
                <img width='25px' height="25px" src={pinterest} alt="Pinterest Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;