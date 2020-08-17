import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
// import { Auth } from 'aws-amplify'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import Routes from './Routes'
import Footer from './pages/Footer'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      userHasAuthenticated: false,
    };
  }

  componentDidMount() {
  }

  render() {
    const { isAuthenticated, userHasAuthenticated } = this.state
    return (
      <div className="App" ref={this.myapp}>
        <Navbar collapseOnSelect expand="lg" variant="dark" className="nav-bg-white fixed-top">
          <div className="container">
            <Navbar.Brand>
              <Link to="/"><img src = "/images/psdl_logo.png" style={{width : "100px"}}></img></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Nav>
                {/* <LinkContainer to="/login"><Nav.Link>ABOUT</Nav.Link></LinkContainer>              
              <LinkContainer to="/signup"><Nav.Link>SERVICE</Nav.Link></LinkContainer>
                       */}
                {/* <LinkContainer to="/#technology"><Nav.Link>TECHNOLOGY</Nav.Link></LinkContainer>               */}
                <Nav.Link href="#technology">TECHNOLOGY</Nav.Link>
                <Nav.Link href="#solution">SOLUTION</Nav.Link>
                <Nav.Link href="#company">COMPANY</Nav.Link>
                <Nav.Link href="#contact">CONTACT</Nav.Link>
              </Nav>
          
            </Navbar.Collapse>
          </div>

        </Navbar>
        <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
