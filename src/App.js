import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar inverse fixedTop>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/">Home</Link>
                </Navbar.Brand>
                <Navbar.Brand>
                  <Link to="/login">Login</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
          </Navbar>

          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
        </div>
      </Router>
    );
  }
}

export default App;