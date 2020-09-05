import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';

const Footer = () => {
  return (
      <Navbar  collapseOnSelect bg="primary" expand="lg" fixed="bottom">      
        <Navbar.Brand>Make it Real Top v6</Navbar.Brand>        
        <Nav className="ml-auto">
          Diego Ardila, Diego Martinez, Donaldo Llanos, Veilhelm Guarín
        </Nav>
      </Navbar>
  );
};

export default Footer;