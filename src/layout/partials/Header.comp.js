import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import logo from '../../assets/img/logo.png'
import { 
  BrowserRouter as Router,
  Switch, Route, Link } from'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'


const Header = () => {
    return (
        <Navbar
          collapseOnSelect
          variant="dark"
          bg="info"
          expand="md"
          >
            <Navbar.Brand>
                <img src={logo} alt="logo" width="150px"/>
            </Navbar.Brand>
            <Navbar.Toggle
             aria-controls="basic-navbar-nav" />
  
             <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ml-auto text-right">
                   <LinkContainer to="/dashboard"><Nav.Link>Dashboard</Nav.Link></LinkContainer>
                   <LinkContainer to="/tickets"><Nav.Link>Tickets</Nav.Link></LinkContainer>
                   <LinkContainer to=""><Nav.Link href="">Logout</Nav.Link></LinkContainer>
               </Nav>
             </Navbar.Collapse>
            
        </Navbar>
    )
}

export default Header
