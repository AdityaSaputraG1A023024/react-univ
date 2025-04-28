import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section py-5'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-3'>Pertanyaan Umum</h2>
            <p className='text-center mb-5'>
                Berikut ini adalah beberapa pertanyaan yang sering diajukan tentang Universitas Bengkulu. Jika Anda memiliki pertanyaan lainnya, 
                silakan hubungi kami melalui <strong>Kontak</strong>.
            </p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>Apa itu Universitas Bengkulu?</Accordion.Header>
                    <Accordion.Body>
                        Universitas Bengkulu (UNIB) adalah perguruan tinggi negeri yang didirikan pada tahun 1982, berkomitmen untuk mencetak generasi yang unggul, inovatif, dan berdaya saing global. UNIB menawarkan pendidikan berkualitas dengan didukung oleh fasilitas yang lengkap dan dosen yang berpengalaman.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>Bagaimana cara mendaftar di Universitas Bengkulu?</Accordion.Header>
                    <Accordion.Body>
                        Untuk mendaftar di Universitas Bengkulu, Anda bisa mengikuti prosedur pendaftaran yang terdapat di situs web resmi UNIB. Proses ini mencakup pendaftaran secara online, ujian seleksi, dan pengumuman hasil seleksi. Pastikan untuk memenuhi semua syarat dan ketentuan yang berlaku.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Apa saja program studi yang tersedia di UNIB?</Accordion.Header>
                    <Accordion.Body>
                        Universitas Bengkulu menawarkan berbagai program studi dari berbagai bidang ilmu, baik di tingkat sarjana maupun pascasarjana. Untuk informasi lebih lanjut mengenai program studi yang tersedia, silakan kunjungi halaman Program Studi di situs web kami.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>Bagaimana kualitas fasilitas di UNIB?</Accordion.Header>
                    <Accordion.Body>
                        Universitas Bengkulu menyediakan berbagai fasilitas yang mendukung kegiatan akademik dan non-akademik mahasiswa, seperti ruang kelas yang nyaman, laboratorium modern, perpustakaan, dan berbagai fasilitas olahraga. Kami berkomitmen untuk terus meningkatkan kualitas fasilitas demi kenyamanan dan kesuksesan mahasiswa.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                    <Accordion.Header>Apakah UNIB memiliki program beasiswa?</Accordion.Header>
                    <Accordion.Body>
                        Ya, Universitas Bengkulu menawarkan berbagai program beasiswa baik dari pemerintah, lembaga swasta, maupun beasiswa internal universitas untuk mendukung mahasiswa berprestasi. Informasi lebih lanjut mengenai program beasiswa dapat ditemukan di halaman Beasiswa di situs web UNIB.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;
