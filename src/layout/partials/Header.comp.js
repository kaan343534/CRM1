import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import logo from '../../assets/img/logo.png'
import { 
  BrowserRouter as Router,
  Switch, Route, Link, useHistory } from'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'


const Header = () => {
  const history = useHistory()

  const logout = () => {
    //history.push("")
  }
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
               <Nav className="ml-auto">
                   <LinkContainer to="/dashboard"><Nav.Link>Dashboard</Nav.Link></LinkContainer>
                   <LinkContainer to="/tickets"><Nav.Link>Tickets</Nav.Link></LinkContainer>
                   <LinkContainer to="/"><Nav.Link>Logout</Nav.Link></LinkContainer>
               </Nav>
             </Navbar.Collapse>
            
        </Navbar>
    )
}

export default Header
