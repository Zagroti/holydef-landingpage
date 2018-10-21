import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './Components/NavBar.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Footer from './Components/Footer.jsx'


class App extends Component {
  state = {
    openMenu : false
  }

  constructor(){
    super()
    AOS.init();
  }

  toggleMenu = () => {
    this.setState( ( prevState ) => {
      return { openMenu: !prevState.openMenu };
  } );
    if(this.state.openMenu === true){
      window.scrollTo(0, 0)
    }
  }

  closeMenu = () => {
    this.setState({openMenu : false})
  }

  render() {


    return (
      <Router>
        <div>
          <div className="bgGradient" >
            <Navbar clicked={this.toggleMenu}
                    open={this.state.openMenu}
                    closeMenu={this.closeMenu}/>
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Footer />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
