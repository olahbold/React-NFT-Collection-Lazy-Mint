import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from './components/Navigation';
import Gallery from './components/Gallery';
import MintPage from './components/How_to_buy';
import MainSection from './components/Main-Section';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Footer from './components/Footer';
import Footers from './components/Footers';

class App extends Component {

render = () => {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Route path='/' exact>
            <MainSection />
            <Section2 />
            <Section3 />
            <Section4 />
          </Route>
          <Route path='/gallery' exact>
            <Gallery />
          </Route>
          <Route path='/howtobuy' exact>
            <MintPage />
          </Route>
          <Footers />
        </div>
      </Router>
    );
  }
}

export default App;
