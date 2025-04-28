import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './AppNavbar.css';
import logo_unib from '../../utils/images/logo_unib.png';

function AppNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header>
      <Navbar expand="lg" className={`header-navbar ${scrolled ? 'scrolled' : ''}`} fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center text-white">
            <img src={logo_unib} alt="UNIB" width="56" height="50" />
            <span className='mx-2 text-light lh-1 fw-semibold'>
              University <br /> Bengkulu
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" className="bg-light" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className='ms-auto d-flex align-items-center'>
              <Nav.Link as={Link} to="/" className={`text-uppercase nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className={`text-uppercase nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Nav.Link>
              <Nav.Link as={Link} to="/courses" className={`text-uppercase nav-link ${location.pathname === '/courses' ? 'active' : ''}`}>Courses</Nav.Link>
              <Nav.Link as={Link} to="/blog" className={`text-uppercase nav-link ${location.pathname === '/blog' ? 'active' : ''}`}>Blog</Nav.Link>
              <Nav.Link as={Link} to="/contact" className={`text-uppercase nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default AppNavbar;
