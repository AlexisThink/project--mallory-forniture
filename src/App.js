import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './app.css'

//COMPONENTS
import About from './components/about/About'
import Terms from './components/terms/Terms'
import All from './components/all/All'
import Home from './components/home/Home'
import Header from './components/header/Header'
import Category from './components/category/Category'
import Product from './components/product/Product'


//RESOURCES
import logo_black from './images/mf-logo-black.svg'
import instagram from './images/networks/instagram.png'
import twitter from './images/networks/twitter.png'
import pinterest from './images/networks/pinterest.png'

class App extends Component {
  render() {
    return (
      <div className="App">

      <Header />
        
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/all-products" component={All} />
            <Route path="/category/:nameCategory" component={Category} />
            <Route path="/product/:id" component={Product} />
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