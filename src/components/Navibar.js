import React from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Navibar = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark" className="navibar">
          <Link to='/'><Navbar.Brand >Wealth Planner </Navbar.Brand></Link>
          <Nav className="ml-auto">
          <Link to='/'>
            Home
            </Link>
            </Nav>
          </Navbar>
      </>
    )
}

export default Navibar
