import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Program from '../../components/Program/Program';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card, Button, Badge, Container, Row, Col } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';
import AboutImg from '../../utils/images/about-university-img.jpg';


const blogs = [
    {
        id: 1,
        img: Blog1Img,
        category: 'Pendidikan',
        author: 'Dr. Ahmad Fauzi',
        readTime: '5 min read',
        title: 'Inovasi Pembelajaran Daring di Era Digital',
        description: 'Bagaimana Universitas Bengkulu mengadaptasi teknologi terbaru untuk menciptakan pengalaman pembelajaran daring yang lebih interaktif dan efektif bagi mahasiswa.',
        date: '15 Juni 2023'
    },
    {
        id: 2,
        img: Blog2Img,
        category: 'Penelitian',
        author: 'Prof. Sri Mulyani',
        readTime: '8 min read',
        title: 'Penelitian Terbaru: Potensi Ekosistem Mangrove Bengkulu',
        description: 'Tim peneliti UNIB berhasil mengidentifikasi spesies mangrove langka yang memiliki potensi besar untuk pengembangan obat-obatan modern.',
        date: '10 Juni 2023'
    },
    {
        id: 3,
        img: Blog3Img,
        category: 'Prestasi',
        featured: true, // tambahan untuk badge "Unggulan"
        author: 'Dian Sastro',
        readTime: '4 min read',
        title: 'Mahasiswa UNIB Juara Kompetisi Robotik Nasional',
        description: 'Tim robotik Fakultas Teknik UNIB berhasil meraih juara pertama dalam kompetisi nasional dengan inovasi robot pembersih sampah pantai.',
        date: '5 Juni 2023'
    }
];



function Home() {
    return (
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
                <div className='container d-flex flex-column align-items-center'>
                    <h1 className='text-center fw-bold display-4 mb-4'>Universitas Bengkulu</h1>
                    <p className="text-center w-75 mb-5 lead">
                        Sebagai institusi pendidikan tinggi terkemuka, Universitas Bengkulu hadir untuk mencetak generasi yang cerdas, berintegritas,
                        dan mampu menghadapi tantangan global melalui pendidikan yang bermutu dan inovatif.
                    </p>
                    <div className='d-flex flex-column flex-sm-row align-items-center'>
                        <Link to="/About">
                            <button type='button' className='btn btn-primary btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>
                                <i className="bi bi-info-circle me-2"></i>About Us</button>
                        </Link>
                        <Link to="/contact">
                            <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>
                                <i className="bi bi-telephone me-2"></i>Contact Us</button>
                        </Link>
                    </div>
                </div>
            </header>

            <div className="about-section bg-light py-5">
                <div className="container d-flex flex-column flex-lg-row align-items-center">
                    <div className="about-img mb-4 mb-lg-0 w-100 w-lg-50">
                        <img src={AboutImg} alt="Tentang Universitas Bengkulu" className="img-fluid rounded-4 shadow" />
                    </div>

                    <div className="about-text ps-lg-5 w-100 w-lg-50">
                        <h6 className="text-primary text-uppercase fw-bold mb-2">Tentang Universitas Bengkulu</h6>
                        <h2 className="fw-bold mb-4">Menyongsong Masa Depan dengan Kualitas dan Inovasi</h2>
                        <p className="text-muted">
                            Universitas Bengkulu (UNIB) didirikan pada tahun 1982 dengan tujuan untuk menyediakan pendidikan tinggi berkualitas yang mendukung pengembangan ilmu pengetahuan dan teknologi, serta meningkatkan kualitas sumber daya manusia di Provinsi Bengkulu dan Indonesia pada umumnya.
                        </p>
                        <p className="mb-3 text-muted">
                            UNIB berkomitmen untuk mencetak generasi penerus bangsa yang tidak hanya unggul di bidang akademik, tetapi juga memiliki integritas, kepemimpinan, dan wawasan global.
                        </p>
                        <Link to="/about">
                            <Button variant="primary" className="mt-3 px-4 py-2">
                                <i className="bi bi-arrow-right-circle me-2"></i> Selengkapnya
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <Program />

            {/* Courses Section */}
            <div className='courses-section py-5'>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h2 className='fw-bold display-6 mb-4'>
                                <i className="bi bi-calendar-check me-3"></i>Penerimaan Mahasiswa Baru 2025
                            </h2>
                            <p className="lead mb-4">
                                Pendaftaran dibuka untuk semua program studi...
                            </p>
                            <div className="d-flex flex-wrap gap-3 mb-4">
                                <div className="bg-primary bg-opacity-10 p-3 rounded-3">
                                    <h5 className="fw-bold mb-0"><i className="bi bi-check-circle text-primary me-2"></i>SNMPTN</h5>
                                </div>
                                <div className="bg-primary bg-opacity-10 p-3 rounded-3">
                                    <h5 className="fw-bold mb-0"><i className="bi bi-check-circle text-primary me-2"></i>SBMPTN</h5>
                                </div>
                                <div className="bg-primary bg-opacity-10 p-3 rounded-3">
                                    <h5 className="fw-bold mb-0"><i className="bi bi-check-circle text-primary me-2"></i>Mandiri</h5>
                                </div>
                            </div>
                            <Link to="courses">
                                <Button variant="primary" size="lg" className='px-4 py-2'>
                                    <i className="bi bi-search me-2"></i>Lihat Program Studi
                                </Button>
                            </Link>
                        </Col>
                        <Col lg={6} className="mt-5 mt-lg-0">
                            <img src={StartCoursesImg} className='img-fluid rounded-4 shadow-lg' alt="Penerimaan Mahasiswa Baru" />
                        </Col>
                    </Row>
                </Container>
            </div>

            <FaqAccordion />

            <div className='blog-section bg-dark text-light py-5'>
                <div className='container d-flex flex-column align-items-center'>
                    <div className="text-center pt-3 pb-5">
                        <h2 className='fw-bold display-6 mb-3'>
                            <i className="bi bi-newspaper me-2"></i> Berita & Artikel Terkini
                        </h2>
                        <p className="lead w-75 mx-auto">
                            Update terbaru seputar kegiatan akademik, penelitian, dan pengabdian masyarakat dari Universitas Bengkulu.
                        </p>
                    </div>

                    <div className='row g-4 mb-5'>
                        {blogs.map((blog) => (
                            <div key={blog.id} className='col-md-6 col-lg-4'>
                                <Card className='h-100 shadow-sm scale-hover-effect position-relative'>
                                    <div className="position-relative">
                                        <Card.Img variant="top" src={blog.img} className="blog-img" />
                                        {blog.featured && (
                                            <Badge bg="warning" text="dark" className="position-absolute top-0 end-0 m-2">Populer</Badge>
                                        )}
                                        <Badge bg="primary" className="position-absolute bottom-0 start-0 m-2">
                                            {blog.category}
                                        </Badge>
                                    </div>

                                        <Card.Body>
                                            <div className="d-flex justify-content-between mb-2">
                                                <small className="text-muted">
                                                    <i className="bi bi-calendar3 me-1"></i> {blog.date}
                                                </small>
                                            </div>
                                            <Card.Title className='fs-5'>{blog.title}</Card.Title>
                                            <Card.Text className='text-muted'>{blog.description}</Card.Text>
                                        </Card.Body>

                                        <Card.Footer className="bg-white border-0 mb-2">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <Link to="/blog" className="text-decoration-none">
                                                    Baca Selengkapnya <i className="bi bi-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </Card.Footer>
                                </Card>
                            </div>
                        ))}
                    </div>

                    <Link to="/blog">
                        <Button variant="primary" size="lg" className='px-4 py-2'>
                            <i className="bi bi-collection me-2"></i>Lihat Semua Berita
                        </Button>
                    </Link>
                </div>
            </div>

        </div>
    )
}
export default Home;