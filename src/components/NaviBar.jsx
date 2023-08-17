import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Navibar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
    <Link activeClass="active" to="/" spy={true} smooth={true} offset={50} duration={500}  className="navbar-brand ms-4" >KEWEBLE.dev</Link>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500} className="nav-link" >Project</Link>
        </li>
        <li className="nav-item">
          <Link activeClass="active"  to="connect" spy={true} smooth={true} offset={50} duration={500} delay={1000} className="nav-link">Connect</Link>
        </li>

      </ul>
    </div>
   
    </nav>
  )
}

export default Navibar
    