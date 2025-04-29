import React, { useState } from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card, Button, Badge, Container, Row, Col } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';
import Blog4Img from '../../utils/images/blog4-img.png';
import Blog5Img from '../../utils/images/blog5-img.jpg';
import Blog6Img from '../../utils/images/blog6-img.png';

const blogs = [
    {
        id: 1,
        img: Blog1Img,
        title: 'Inovasi Pembelajaran Daring di Era Digital',
        date: '15 april 2025',
        description: 'Bagaimana Universitas Bengkulu mengadaptasi teknologi terbaru untuk menciptakan pengalaman pembelajaran daring yang lebih interaktif dan efektif bagi mahasiswa.',
        category: 'Pendidikan',
        featured: true
    },
    {
        id: 2,
        img: Blog2Img,
        title: 'Penelitian Terbaru: Potensi Ekosistem Mangrove Bengkulu',
        date: '10 april 2025',
        description: 'Tim peneliti UNIB berhasil mengidentifikasi spesies mangrove langka yang memiliki potensi besar untuk pengembangan obat-obatan.',
        category: 'Penelitian',
    },
    {
        id: 3,
        img: Blog3Img,
        title: 'Mahasiswa UNIB Juara Kompetisi Robotik Nasional',
        date: '5 maret 2025',
        description: 'Tim robotik Fakultas Teknik UNIB berhasil meraih juara pertama dalam kompetisi nasional dengan inovasi robot pembersih sampah pantai.',
        category: 'Prestasi',
        featured: true
    },
    {
        id: 4,
        img: Blog4Img,
        title: 'Workshop Kewirausahaan untuk Mahasiswa',
        date: '1 maret 2025',
        description: 'Program pengembangan kewirausahaan mahasiswa UNIB menghasilkan 5 startup baru yang siap diluncurkan ke pasar.',
        category: 'Kegiatan',
    },
    {
        id: 5,
        img: Blog5Img,
        title: 'Kerjasama Internasional dengan Universitas di Jepang',
        date: '18 februari 2023',
        description: 'UNIB menjalin kerjasama pertukaran pelajar dan penelitian bersama Kyoto University untuk pengembangan energi terbarukan.',
        category: 'Kerjasama',
        featured: true
    },
    {
        id: 6,
        img: Blog6Img,
        title: 'Peluncuran Buku Karya Dosen UNIB',
        date: '25 Februari 2025',
        description: 'Buku terbaru tentang ekonomi digital karya dosen FH UNIB menjadi referensi utama di berbagai universitas.',
        category: 'Publikasi',
    },
];

const categories = [
    { name: 'Semua', count: blogs.length },
    { name: 'Pendidikan', count: blogs.filter(b => b.category === 'Pendidikan').length },
    { name: 'Penelitian', count: blogs.filter(b => b.category === 'Penelitian').length },
    { name: 'Prestasi', count: blogs.filter(b => b.category === 'Prestasi').length },
    { name: 'Kegiatan', count: blogs.filter(b => b.category === 'Kegiatan').length },
    { name: 'Kerjasama', count: blogs.filter(b => b.category === 'Kerjasama').length },
    { name: 'Publikasi', count: blogs.filter(b => b.category === 'Publikasi').length },
];

function Blog() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='blog-page'>
            {/* Hero Section */}
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-bold display-4 mb-4'>Blog & Berita UNIB</h1>
                    <p className='text-center w-75 mb-5 lead'>
                        Temukan informasi terbaru seputar kegiatan, prestasi, dan perkembangan Universitas Bengkulu.
                        Update terbaru dari dunia pendidikan, penelitian, dan pengabdian masyarakat.
                    </p>
                </div>
            </header>

            <Container className='py-4 my-4'>
                <Row>
                    {/* Sidebar */}
                    <Col lg={3} className='mb-4 mb-lg-0'>
                        <Card className='shadow-sm border-0 p-4 mb-4'>
                            <h5 className='fw-bold mb-4'>
                                <i className="bi bi-tags-fill me-2"></i> Kategori
                            </h5>
                            <ul className="list-unstyled">
                                {categories.map((category, index) => (
                                    <li key={index} className="mb-3">
                                        <Link
                                            to="/blog"
                                            className="text-decoration-none w-100 d-flex justify-content-between align-items-center text-dark"
                                        >
                                            <span className="text-start">{category.name}</span>
                                            <Badge bg="primary" pill className="ms-2">{category.count}</Badge>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                        <Card className='shadow-sm border-0 p-4'>
                            <h5 className='fw-bold mb-4'>Artikel Populer</h5>
                            {blogs.filter(blog => blog.featured).map(blog => (
                                <div key={blog.id} className="mb-3">
                                    <Link to="/blog" className="text-decoration-none">
                                        <div className="d-flex">
                                            <img src={blog.img} alt={blog.title} className="rounded me-3" width="80" height="60" style={{ objectFit: 'cover' }} />
                                            <div>
                                                <h6 className="mb-0">{blog.title}</h6>
                                                <small className="text-muted">
                                                    <i className="bi bi-calendar3 me-1"></i> {blog.date}
                                                </small>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </Card>
                    </Col>
                    <Col lg={9}>
                        <div className="d-flex justify-content-between align-items-center mb-5">
                            <h2 className='fw-bold display-6'>Semua Artikel</h2>
                            <div className="d-flex gap-2">
                                <div className="input-group" style={{ width: '400px' }}>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Cari artikel..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <button className="btn btn-primary" type="button">
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {filteredBlogs.length > 0 ? (
                            <>
                                <Row className='g-4'>
                                    {filteredBlogs.map((blog) => (
                                        <Col key={blog.id} md={6} lg={4}>
                                            <Card className='h-100 shadow-sm border-0 scale-hover-effect'>
                                                <div className="position-relative">
                                                    <Card.Img
                                                        variant="top"
                                                        src={blog.img}
                                                        className="blog-img"
                                                        style={{ height: '200px', objectFit: 'cover' }}
                                                    />
                                                    {blog.featured && (
                                                        <Badge bg="warning" text="dark" className="position-absolute top-0 end-0 m-2">
                                                            Populer
                                                        </Badge>
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
                                                <Card.Footer className="bg-white border-0">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <Link to="/blog" className="text-decoration-none">
                                                            Baca Selengkapnya <i className="bi bi-arrow-right"></i>
                                                        </Link>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                                <nav className="mt-5">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled">
                                            <a className="page-link" href="#prev" tabIndex="-1">Previous</a>
                                        </li>
                                        <li className="page-item active"><a className="page-link" href="#blog">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#blog">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#blog">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#contact">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </>
                        ) : (
                            <div className="text-center py -5">
                                <h4 className="text-muted">Artikel tidak ditemukan</h4>
                                <p className="mb-4">Tidak ada artikel yang cocok dengan pencarian Anda.</p>
                                <Button
                                    variant="outline-primary"
                                    onClick={() => setSearchQuery('')}
                                >
                                    Tampilkan Semua Artikel
                                </Button>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Blog;
