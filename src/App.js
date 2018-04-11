import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import GlobalContainer from './containers/GlobalContainer';
import Navigation from './containers/Navigation';
import Main from './containers/Main';
import Services from './containers/Services';
import Footer from './containers/Footer';
import Gallery from './containers/Gallery';
import Calculator from './containers/Calculator';
import Contact from './containers/Contact';
import 'animate.css';

class App extends Component {




  render() {
    return (
      <BrowserRouter>
        <GlobalContainer>
          <Navigation/>
          <Route path={ '/'}  exact component={Main}/>
          <Route path={ '/services'} exact  component={Services}/>
          <Route path={ '/gallery'}  exact component={Gallery}/>
          <Route path={ '/calculator'} exact component={Calculator}/>
          <Route path={ '/contact'} exact component={Contact}/>
          <Footer/>
        </GlobalContainer>
      </BrowserRouter>
    );
  }
}

export default App;
