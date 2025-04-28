import React, { useState } from 'react';
import './Courses.css';
import { Link } from 'react-router-dom';
import { Card, Button, Badge, Form, InputGroup } from 'react-bootstrap';
import BusinessCourseImg from '../../utils/images/business-course.png';
import ComputerScienceCourseImg from '../../utils/images/computer-science-course.png';
import EducationCourseImg from '../../utils/images/education-course.png';
import HealthcareCourseImg from '../../utils/images/healthcare-course.png';
import LawCourseImg from '../../utils/images/law-course.jpg';
import ForestryCourseImg from '../../utils/images/forestry-course.png';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
    {
        id: 1,
        img: ComputerScienceCourseImg,
        title: 'Informatika',
        faculty: 'Fakultas Teknik',
        description: 'Program studi yang mengkhususkan diri dalam pengembangan perangkat lunak, kecerdasan buatan, dan sistem informasi.',
        accreditation: 'B',
        featured: true
    },
    {
        id: 3,
        img: EducationCourseImg,
        title: 'Pendidikan Guru Sekolah Dasar',
        faculty: 'FKIP',
        description: 'Mempersiapkan guru profesional dengan kompetensi pedagogis dan pemanfaatan teknologi di sekolah dasar.',
        accreditation: 'B'
    },
    {
        id: 2,
        img: BusinessCourseImg,
        title: 'Akuntansi',
        faculty: 'FEB',
        description: 'Membekali mahasiswa dengan pengetahuan di bidang akuntansi, bisnis, dan keterampilan manajerial untuk pasar global.',
        accreditation: 'A'
    },
    {
        id: 4,
        img: HealthcareCourseImg,
        title: 'Kedokteran',
        faculty: 'FKIIK',
        description: 'Program studi yang berfokus pada pendidikan kedokteran untuk menghasilkan tenaga medis profesional dengan pendekatan ilmiah dan humanis.',
        accreditation: 'C'
    },
    {
        id: 5,
        img: LawCourseImg,
        title: 'Ilmu Hukum',
        faculty: 'Fakultas Hukum',
        description: 'Membekali mahasiswa dengan pemahaman mendalam mengenai hukum Indonesia dan internasional dengan pendekatan kritis.',
        accreditation: 'A'
    },
    {
        id: 6,
        img: ForestryCourseImg,
        title: 'Ilmu Kehutanan',
        faculty: 'Fakultas Pertanian',
        description: 'Menghasilkan ahli di bidang kehutanan dengan pendekatan ilmiah dan manajerial untuk pengelolaan sumber daya alam yang berkelanjutan.',
        accreditation: 'B'
    }
]


function Courses() {
    const [searchQuery, setSearchQuery] = useState('');

    // Fungsi untuk memfilter program studi
    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.faculty.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div className='courses-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-bold display-4 mb-4'>Program Studi Unggulan</h1>
                    <p className='text-center w-75 mb-5 lead'>
                        Universitas Bengkulu menawarkan berbagai program studi berkualitas dengan kurikulum berbasis kompetensi
                        dan fasilitas pembelajaran modern untuk mempersiapkan lulusan yang siap bersaing di era global.
                    </p>
                </div>
            </header>

            {/* Courses Grid */}
            <div className='container pt-5'>
                <div className='text-center'>
                    <h2 className='fw-bold display-5 mb-3'>Pilihan Program Studi</h2>
                    <p className='lead text-center text-muted w-75 mx-auto'>
                        Temukan program studi yang sesuai dengan minat dan bakat Anda di antara berbagai pilihan yang kami tawarkan.
                    </p>
                    {/* Search Bar */}
                    <div className='d-flex justify-content-center mt-4 mb-3'>
                        <InputGroup style={{ width: '500px' }}>
                            <Form.Control
                                type="text"
                                placeholder="Cari program studi, fakultas, atau deskripsi..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="py-2"
                            />
                            <Button variant="primary">
                                <i className="bi bi-search"></i> Cari
                            </Button>
                        </InputGroup>
                    </div>
                </div>

                <div className='row g-4 py-5'>
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                            <div key={course.id} className='col-lg-6'>
                                <Card className='shadow-lg scale-hover-effect border-0 h-100'>
                                    <div className="position-relative">
                                        <Card.Img src={course.img} className='course-img' />
                                        <div className="position-absolute top-0 end-0 m-3">
                                            {course.featured && <Badge bg="warning" text="dark" className="fs-6 px-3 py-2">Unggulan</Badge>}
                                        </div>
                                        <div className="position-absolute bottom-0 start-0 bg-primary text-white p-2 px-3">
                                            <span className="fw-bold">{course.faculty}</span>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className='fw-bold fs-3 mb-3'>{course.title}</Card.Title>
                                        <Card.Text>{course.description}</Card.Text>
                                        <div className="d-flex flex-wrap gap-3 mt-4">
                                            <div className="d-flex align-items-center text-muted">
                                                <i className="bi bi-patch-check-fill me-2"></i> Akreditasi {course.accreditation}
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer className="bg-white border-0">
                                        <Button variant="primary" className='w-100 py-2'>
                                            Lihat Detail Program
                                        </Button>
                                    </Card.Footer>
                                </Card>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center py-5">
                            <h4 className="text-muted">Program studi tidak ditemukan</h4>
                            <p>Coba kata kunci lain atau lihat semua program studi kami</p>
                            <Button variant="outline-primary" onClick={() => setSearchQuery('')}>
                                Tampilkan Semua
                            </Button>
                        </div>
                    )}
                </div>
                <div className="text-center mb-5">
                    <Link to="/courses">
                        <Button variant="primary" size="lg" className='px-4 py-2'>
                            <i className="bi bi-collection me-2"></i> Lihat Semua Program
                        </Button>
                    </Link>
                </div> 
            </div>
            <FaqAccordion />
        </div>
    )
}

export default Courses;
