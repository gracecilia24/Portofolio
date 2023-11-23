const Page = () => {
  return (
    <div>
         <div className="container-fluid p-0">
    {/* About*/}
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Toding Rante,
          <span className="text-primary">Gracecilia</span>
        </h1>
        <div className="subheading mb-5">
          95445 Girian · Efraim Lengkong, Matuari Manembo-Nembo · 08239319939 ·
          <a href="mailto:name@email.com">gkeren@gmail.comm</a>
        </div>
        <p className="lead mb-5">Saya adalah mahasiswa Universitas Klabat, saya bergabung dengan Universitas Klabat pada tahun 2021. Khususnya di Fakultas Komputer, Program Studi Informatika. Saat ini saya sedang menempuh semester 5. Saya memiliki ketertarikan dalam dunia AI(Kecerdasan Buatan).</p>
        <div className="social-icons">
          <a className="social-icon" href="#!"><i className="fab fa-linkedin-in" /></a>
          <a className="social-icon" href="#!"><i className="fab fa-github" /></a>
          <a className="social-icon" href="#!"><i className="fab fa-twitter" /></a>
          <a className="social-icon" href="#!"><i className="fab fa-facebook-f" /></a>
        </div>
      </div>
    </section>
    <hr className="m-0" />
    {/* Experience*/}
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">Experience</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Web Design</h3>
            <div className="subheading mb-3">Modifikasi Web Universitas Klabat</div>
            <p>Memodifikasi dan membuat tampilan dari Web Universitas Klabat.</p>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">Agustus 2022 - Desember 2022</span></div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Visual Programming</h3>
            <div className="subheading mb-3">ReadVoyage</div>
            <p>Membuat Aplikasi desktop perpustakaan online beserta tampilan dan database-nya.</p>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">September 2023 - Desember 2023</span></div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">System Analisys and Design</h3>
            <div className="subheading mb-3">Merancang System dan Mendesain</div>
            <p>Membuat dan Merancang Desaign dari System Perpustakaan.</p>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">September 2023 - December 2023</span></div>
        </div>
      </div>
    </section>
    <hr className="m-0" />
    {/* Education*/}
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">SMA NEGRI 1 BITUNG</h3>
            <div className="subheading mb-3">IPA(Ilmu Pengetahuan Alam)</div>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">August 2019 - May 2021</span></div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="flex-grow-1">
            <h3 className="mb-0">Universitas Klabat</h3>
            <div className="subheading mb-3">Ilmu Komputer, Informatika</div>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">August 2021 - January 2025</span></div>
        </div>
      </div>
    </section>
    <hr className="m-0" />
    {/* Skills*/}
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">Skills</h2>
        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item"><i className="fab fa-html5" /></li>
          <li className="list-inline-item"><i className="fab fa-css3-alt" /></li>
          <li className="list-inline-item"><i className="fab fa-js-square" /></li>
          <li className="list-inline-item"><i className="fab fa-angular" /></li>
          <li className="list-inline-item"><i className="fab fa-react" /></li>
          <li className="list-inline-item"><i className="fab fa-node-js" /></li>
          <li className="list-inline-item"><i className="fab fa-sass" /></li>
          <li className="list-inline-item"><i className="fab fa-less" /></li>
          <li className="list-inline-item"><i className="fab fa-wordpress" /></li>
          <li className="list-inline-item"><i className="fab fa-gulp" /></li>
          <li className="list-inline-item"><i className="fab fa-grunt" /></li>
          <li className="list-inline-item"><i className="fab fa-npm" /></li>
        </ul>
        <div className="subheading mb-3">Bahasa Pemograman</div>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li"><i className="fas fa-check" /></span>
            Python
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-check" /></span>
            C#
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-check" /></span>
            JavaScript
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-check" /></span>
            C++
          </li>
        </ul>
      </div>
    </section>
    <hr className="m-0" />
    {/* Interests*/}
    <section className="resume-section" id="interests">
      <div className="resume-section-content">
        <h2 className="mb-5">Interests</h2>
        <p>Sebagian dari waktu saya sebagai mahasiswa Informatika Universitas Klabat, saya juga hobby berenang selain itu, saya sangat suka mencari relasi dan berkumpul bersama teman saya di coffe shope dan tempat nongkrong lainnya hanya untuk berbagi cerita dan pengalaman.</p>
        <p className="mb-0">Saya juga sangat suka menonton film, dan jika ada waktu luang yang panjang saya suka untuk mengeksplor tempat-tempat yang belum pernah saya kunjungi.</p>
      </div>
    </section>
    <hr className="m-0" />
  </div>
    </div>
  )
}

export default Page