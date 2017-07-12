import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import SearchCharacters from '../../container/SearchCharacters'

class Navigation extends Component {

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Marvel Character Search
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <SearchCharacters />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;