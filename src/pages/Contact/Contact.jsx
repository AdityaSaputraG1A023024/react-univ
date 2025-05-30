import React, { useState } from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Contact() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className='contact-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light text-center'>
                    <h1 className='fw-bold display-4 mb-4'>Hubungi Kami</h1>
                    <p className='w-75 lead'>
                        Memiliki pertanyaan atau ingin memberikan masukan? Kami siap membantu Anda.
                        Silakan hubungi kami melalui berbagai saluran komunikasi yang tersedia.
                    </p>
                </div>
            </header>

            <div className='container my-5'>
                <div className='row g-5'>

                    {/* Contact Information Left */}
                    <div className='col-lg-5'>
                        <h2 className='fw-bold mb-4'>Get in Touch</h2>
                        <p className='mb-4'>Hubungi kami untuk informasi akademik, pendaftaran mahasiswa baru, atau layanan kampus lainnya di Universitas Bengkulu</p>
                        <div className='d-flex align-items-start mb-4'>
                            <i className="bi bi-geo-alt-fill fs-4 text-primary me-3 mt-1"></i>
                            <div>
                                <h5 className='fw-semibold'>Address</h5>
                                <p className='mb-0'>University of Bengkulu, Jl. WR Supratman, Kandang Limun, Bengkulu 38371 – Indonesia</p>
                            </div>
                        </div>

                        <div className='d-flex align-items-start mb-4'>
                            <i className="bi bi-envelope-fill fs-4 text-primary me-3 mt-1"></i>
                            <div>
                                <h5 className='fw-semibold'>Email</h5>
                                <p className='mb-0'>rektorat@unib.ac.id</p>
                            </div>
                        </div>

                        <div className='d-flex align-items-start mb-4'>
                            <i className="bi bi-telephone-fill fs-4 text-primary me-3 mt-1"></i>
                            <div>
                                <h5 className='fw-semibold'>Phone</h5>
                                <p className='mb-0'>+62-736-21170</p>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className='mt-5'>
                            <h5 className='fw-semibold mb-3'>Connect With Us</h5>
                            <div className='d-flex gap-3'>
                                <a href="https://www.facebook.com/unibofficial1" className='text-dark fs-3' target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/unibofficial/" className='text-dark fs-3' target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-instagram"></i>
                                </a>
                                <a href="https://www.youtube.com/@UNIBTV" className='text-dark fs-3' target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-youtube"></i>
                                </a>
                                <a href="https://youtu.be/IpFX2vq8HKw?si=9DDj0pfqymdIXbZk" className='text-dark fs-3' target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Contact Form Right */}
                    <div className='col-lg-7 ps-lg-5'>
                        <h2 className='fw-bold mb-4'>Send Us a Message</h2>
                        <Form noValidate validated={validated} onSubmit={handleSubmit} id='contact-form'>
                            <Row className='mb-3'>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control required type="text" placeholder="Enter first name" />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide your first name.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control required type="text" placeholder="Enter last name" />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide your last name.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>


                            <Form.Group className='mb-3'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control required type="email" placeholder="Enter email" />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid email address.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <Form.Label>Address</Form.Label>
                                <Form.Control required type="text" placeholder="Enter your address" />
                                <Form.Control.Feedback type="invalid">
                                    Please provide your address.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <Form.Label>Message</Form.Label>
                                <Form.Control required as="textarea" rows={4} placeholder="Your message" />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your message.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <div className='text-start'>
                                <Button variant="primary" type="submit" className='px-5 py-2'>
                                    <i className="bi bi-send-fill me-2"></i> Send Message
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>

            <div className='container-fluid p-0'>
                <div className='map-container'>
                    <iframe
                        title="UNIB Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7962.464801396398!2d102.2628611326218!3d-3.7595199403644273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e36b1c18941d9f3%3A0x1aecc8afb80fdf02!2sUniversitas%20Bengkulu!5e0!3m2!1sid!2sid!4v1745684066163!5m2!1sid!2sid"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

        </div>
    );
}



export default Contact;