import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo_unib from '../../utils/images/logo_unib.png';

function Footer() {
  return (
    <footer className='footer-dark'>
      <div className='container py-4'>
        <div className='row gx-4 align-items-start'>

          {/* University Logo and Name */}
          <div className='col-md-3 mb-4 mb-md-0'>
            <div className='footer-header d-flex align-items-center'>
              <img src={logo_unib} alt="University Bengkulu Logo" width="70" />
              <h3 className='text-white fw-bold m-0'>University Bengkulu</h3>
            </div>
            <div className='footer-subtitle mt-2'>Higher Education</div>
          </div>

          {/* Navigation */}
          <div className='col-md-2 mb-4 mb-md-0'>
            <div className='footer-title'>Navigation</div>
            <ul className='list-unstyled'>
              <li><Link to="/" className='footer-link'>Home</Link></li>
              <li><Link to="/about" className='footer-link'>About</Link></li>
              <li><Link to="/courses" className='footer-link'>Courses</Link></li>
              <li><Link to="/blog" className='footer-link'>Blog</Link></li>
              <li><Link to="/contact" className='footer-link'>Contact</Link></li>
            </ul>
          </div>

          {/* Location and Contact Us combined */}
          <div className='col-md-3 mb-4 mb-md-0'>
            <div className='footer-title'>Location</div>
            <p className='footer-text mb-1'><i className="bi bi-geo-alt me-2"></i>Jl. WR Supratman, Kandang Limun</p>
            <p className='footer-text'>Bengkulu 38371 – Indonesia</p>

            <div className='footer-title mt-4'>Contact Us</div>
            <p className='footer-text mb-1'><i className="bi bi-telephone me-2"></i>Phone: +62 736 21170</p>
            <p className='footer-text'><i className="bi bi-envelope me-2"></i>Email: info@unib.ac.id</p>
          </div>

          {/* Connect with us */}
          <div className='col-md-3 mb-4 mb-md-0'>
            <div className='footer-title'>Get Connected On</div>
            <div className='footer-subtitle mb-3'>Social Media</div>
            <div className='d-flex flex-wrap gap-3'>
              <a href="https://www.facebook.com/unibofficial1" className='social-icon' target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/unibofficial/" className='social-icon' target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.youtube.com/@UNIBTV" className='social-icon' target="_blank" rel="noopener noreferrer">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="https://youtu.be/IpFX2vq8HKw?si=9DDj0pfqymdIXbZk" className='social-icon' target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>


        </div>
      </div>

      <hr className='footer-divider' />

      <div className='container py-2 d-flex flex-column flex-md-row justify-content-between align-items-center'>
        <small className='text-white'>© {new Date().getFullYear()} Aditya Saputra</small>
        <Link to="/contact" className='footer-link'>Privacy Policy</Link>
      </div>
    </footer>
  );
}

export default Footer;
