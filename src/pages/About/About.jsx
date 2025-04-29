import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/about-us-section-img.jpg';
import Program from '../../components/Program/Program';
import Person1 from '../../utils/images/person1.png';
import Person2 from '../../utils/images/person2.png';
import Person3 from '../../utils/images/person3.png';
import Person4 from '../../utils/images/person4.png';
import Person5 from '../../utils/images/person5.png';
import Person6 from '../../utils/images/person6.jpg';
import LibraryImage from '../../utils/images/library.jpg';



const persons = [
    { id: 1, img: Person1, name: "Dr. Retno Agustina Ekaputri, S.E., M.Sc.", position: "Rektor" },
    { id: 2, img: Person2, name: "Prof. Dr. Mochamad Lutfi Firdaus, S.Si, M.", position: "Wakil Rektor Bidang Akademik" },
    { id: 3, img: Person3, name: "Yefriza, S.E., MPPM, Ph.D", position: "	Wakil Rektor Bidang Sumber Daya" },
    { id: 4, img: Person4, name: "Prof. Dr. Candra Irawan, S.H., M.Hum.", position: "Wakil Rektor Bidang Kemahasiswaan" },
    { id: 5, img: Person5, name: "Prof. David Brown", position: "Wakil Rektor Bidang Perencanaan dan Kerja Sama" },
    { id: 6, img: Person6, name: "Tariq Sang pahlawan", position: "Preman TI" },
];

const stats = [
    { id: 1, icon: "bi-mortarboard", number: "15.000+", text: "Mahasiswa Aktif" },
    { id: 2, icon: "bi-people", number: "1.200+", text: "Staf & Dosen" },
    { id: 4, icon: "bi-trophy", number: "100+", text: "Prestasi Nasional" },
    { id: 3, icon: "bi-journal-bookmark", number: "50+", text: "Program Studi" },
    { id: 4, icon: "bi bi-building fs-1", number: "8", text: "Fakultas" },
];

const facilities = [
    { id: 1, icon: "bi-book", title: "Perpustakaan Digital", desc: "Koleksi lengkap buku dan jurnal" },
    { id: 2, icon: "bi-laptop", title: "Laboratorium", desc: "Fasilitas penelitian mutakhir" },
    { id: 3, icon: "bi-building", title: "Asrama", desc: "Tempat tinggal nyaman untuk mahasiswa" },
    { id: 4, icon: "bi-joystick", title: "Fasilitas Olahraga", desc: "Lapangan dan gedung olahraga lengkap" },
    { id: 5, icon: "bi-lightbulb", title: "Pusat Kewirausahaan", desc: "Pengembangan bakat bisnis mahasiswa" },
    { id: 6, icon: "bi-cup-hot", title: "Kantin", desc: "Tempat makan dengan berbagai pilihan" },
];


function About() {
    return (
        <div className='about-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold display-4 mb-4'>
                        Tentang Universitas Bengkulu
                    </h1>
                    <p className='text-center w-75 mb-5 lead'>
                        Universitas Bengkulu merupakan perguruan tinggi negeri yang berkomitmen untuk menciptakan generasi
                        unggul melalui pendidikan berkualitas, penelitian inovatif, dan pengabdian kepada masyarakat
                    </p>
                </div>
            </header>

            <div className="container my-5">
                <div className="row align-items-stretch">
                    {/* Text Section */}
                    <div className="col-lg-7 d-flex flex-column justify-content-center">
                        <h2 className="fw-bold mb-4">Tentang Universitas Bengkulu</h2>
                        <p className="text-muted text-justify">
                            Universitas Bengkulu (UNIB) didirikan berdasarkan keputusan Presiden RI Nomor 17 tahun 1982 dan diresmikan oleh Menteri Pendidikan dan Kebudayaan Republik Indonesia,
                            Prof. Dr. Daud Yusuf. Pada saat yang sama dilantik Rektor UNIB pertama, Prof. Ir. Soenjoto Sumodihardjo (UGM) untuk masa jabatan 1982-1986. Dr. Ir. Soekotjo (UGM),
                            yang sebelumnya menjabat Pembantu Rektor I, memimpin UNIB untuk periode 1986-1990. Untuk periode 1990-1995 Dr. Ir. Nitza Arbi (UNAND) diberi kepercayaan memimpin UNIB.
                            Tahun 1995 sampai dengan 2005 jabatan Rektor UNIB dipegang oleh Prof. Dr. H Zulkifli Husin, S.E, M.Sc. (UNSYIAH). Sejak 2005 sampai dengan 2013 Rektor UNIB dijabat oleh
                            Prof. Ir. Zainal Muktamar, Msc., Ph.D. Rektor ke-6 Unib dipimpin oleh Dr. Ridwan Nurazi, S.E.,M.Sc., Ak dengan masa jabatan 2013-2017 dan 2017-2021.
                            Pada tanggal 5 Oktober 2021, Dr. Retno Agustina Ekaputri, S.E., M.Sc. dilantik sebagai Rektor ke-7 Universitas Bengkulu.
                        </p>

                        <h5 className="fw-bold mt-4 mb-3">Visi</h5>
                        <p className="text-muted text-justify">
                            Menjadi universitas unggul, berbudaya, dan berdaya saing internasional.
                        </p>

                        <h5 className="fw-bold mt-4 mb-3">Misi</h5>
                        <ul className="list-unstyled text-muted">
                            <li className="mb-2"> <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                Menciptakan sistem tata kelola yang profesional, tangguh, adil dan berkelanjutan.
                            </li>
                            <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>
                                Mengembangkan sistem pendidikan dan pengajaran yang dapat diakses oleh semua lapisan masyarakat.
                            </li>
                            <li className="mb-2"> <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                Melaksanakan pengabdian kepada masyarakat sesuai kebutuhan wilayah, nasional, dan internasional.
                            </li>
                            <li className="mb-2"> <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                Melaksanakan penelitian untuk pengembangan dan pembangunan nasional serta internasional.
                            </li>
                            <li className="mb-2"> <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                Melakukan integrasi Tridharma untuk pengembangan ilmu, masyarakat, dan ketahanan negara.
                            </li>
                        </ul>
                    </div>
                    {/* Image Section */}
                    <div className="col-lg-5 d-flex justify-content-center align-items-center">
                        <img
                            src={AboutUsSectionImg}
                            className="img-fluid rounded-4 shadow" style={{ width: '90%', height: '90%', objectFit: 'cover' }}
                            alt="Tentang Universitas Bengkulu"
                        />
                    </div>
                </div>
            </div>


            <Program />

            {/* Facilities Section */}
            <div className='container my-5'>
                <div className="row align-items-center">
                    <div className='col-lg-6 order-lg-2 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                        <h2 className='mb-4 display-5 fw-bold text-primary'>
                            <i className="bi bi-building-gear me-3"></i>Fasilitas Unggulan
                        </h2>
                        <p className='lead'>
                            Universitas Bengkulu menyediakan berbagai fasilitas modern untuk mendukung kegiatan akademik
                            dan pengembangan mahasiswa.
                        </p>
                        <div className='row mt-4'>
                            {facilities.map((facility) => (
                                <div key={facility.id} className='col-md-6 mb-4'>
                                    <div className='d-flex'>
                                        <div className='me-3'>
                                            <i className={`bi ${facility.icon} fs-3 text-primary`}></i>
                                        </div>
                                        <div>
                                            <h5 className='fw-bold'>{facility.title}</h5>
                                            <p className='mb-0'>{facility.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='col-lg-6 order-lg-1 d-flex justify-content-center'>
                        <img src={LibraryImage} className='img-fluid rounded-4 shadow-lg border border-2 border-primary'
                        alt="Perpustakaan Universitas Bengkulu" />
                    </div>
                </div>
            </div>

            <div className='bg-primary text-white py-5'>
                <div className="container">
                    <h2 className='text-center mb-5 display-5 fw-bold'>
                        <i className="bi bi-graph-up me-3"></i>Universitas Bengkulu
                    </h2>
                    <div className='row g-4 text-center'>
                        {stats.map((stat) => (
                            <div key={stat.id} className='col-md-4 col-lg-2 mx-auto'>
                                <div className='p-4 bg-white text-primary rounded-4 shadow'>
                                    <i className={`bi ${stat.icon} fs-1 mb-3`}></i>
                                    <h3 className='fw-bold'>{stat.number}</h3>
                                    <p className='mb-0'>{stat.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Gallery Section */}
            <div className='gallery-Section py-5'>
                <div className="container">
                    <h2 className='text-center mb-4 display-5 fw-bold'>
                        <i className="bi bi-images me-3"></i>Galeri & Pimpinan
                    </h2>
                    <p className='text-center lead mb-5'>
                        <i className="bi bi-person-lines-fill me-2"></i>Kenali lebih dekat para pimpinan kampus Universitas Bengkulu
                    </p>
                    <div className='row g-4'>
                        {persons.map((person) => (
                            <div key={person.id} className='col-md-6 col-lg-4'>
                                <div className='card h-100 border border-3 border-dark shadow-sm rounded-4'>
                                    <img src={person.img} className='card-img-top rounded-top-4' alt={person.name} />
                                    <div className='card-body text-center'>
                                        <h5 className='card-title fw-bold'>
                                            <i className="bi bi-person-badge me-2"></i>{person.name}
                                        </h5>
                                        <p className='card-text text-muted'>
                                            <i className="bi bi-briefcase me-2"></i>{person.position}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className='bg-primary text-white py-5'>
                <div className="container text-center">
                    <h2 className='mb-4 display-5 fw-bold'>
                        <i className="bi bi-question-circle me-3"></i>Tertarik Bergabung Dengan Kami?
                    </h2>
                    <p className='lead mb-5 w-75 mx-auto'>
                        <i className="bi bi-megaphone me-2"></i>Daftarkan diri Anda sekarang dan jadilah bagian dari komunitas akademik yang dinamis
                        di Universitas Bengkulu.
                    </p>
                    <div className='d-flex gap-3 justify-content-center'>
                        <Link to="/contact" className='btn btn-light btn-lg px-4 py-2 fw-bold'>
                            <i className="bi bi-pencil-square me-2"></i>Pendaftaran Mahasiswa Baru
                        </Link>
                        <Link to="/contact" className='btn btn-outline-light btn-lg px-4 py-2'>
                            <i className="bi bi-envelope me-2"></i>Hubungi Kami
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About;

