import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import logo from '../../assets/img/logo.png'

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
                   <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                   <Nav.Link href="/dashboard">Tickets</Nav.Link>
                   <Nav.Link href="/dashboard">Logout</Nav.Link>
               </Nav>
             </Navbar.Collapse>
        </Navbar>
    )
}

export default Header