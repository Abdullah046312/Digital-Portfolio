import React from 'react'
import "./header.css"
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <section id='header_nav'>

    <Navbar expand="lg" className="header">
     <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto right">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#home">Service</Nav.Link>
            <Nav.Link href="#home">Portfolio</Nav.Link>
            <Nav.Link href="#home">Blog</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
            
         
          </Nav>
          <Nav className="mx-auto left">
            
            <Nav.Link href="#home">Hire Me</Nav.Link>
           
            
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>

    
   
  )
}

export default Header
