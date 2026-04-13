import { useState } from 'react'
import SIH from './assets/SIH.png'
import ALPG1 from './assets/ALPG1.png'
import ALPG2 from './assets/ALPG2.png'
import ALPG3 from './assets/ALPG3.png'
import ALPG4 from './assets/ALPG4.png'
import CMS1 from './assets/CMS1.png'
import CMS2 from './assets/CMS2.png'
import CMS3 from './assets/CMS3.png'
import CMS4 from './assets/CMS4.png'
import CMS5 from './assets/CMS5.png'
import resume1 from './assets/resume1.png'
import resume2 from './assets/resume2.png'
import HackCraft from './assets/HackCraft.jpeg'
import profile_pic from './assets/profile_pic.jpeg'

function App() {
  const [tab, setTab] = useState('about')

  return (
    <div className="container py-4">

      {/* Main Heading - centered */}
      <h1 className="text-center fw-bold mb-4" style={{ letterSpacing: '-0.5px' }}>
        Portfolio
      </h1>

      {/* Navigation Tabs */}
      <div className="d-flex justify-content-center mb-5">
        <div className="btn-group" role="group">
          <button
            className={`btn px-4 py-2 rounded-pill me-2 fw-semibold ${tab === 'about' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setTab('about')}
          >
            About
          </button>
          <button
            className={`btn px-4 py-2 rounded-pill fw-semibold ${tab === 'resume' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setTab('resume')}
          >
            Resume
          </button>
        </div>
      </div>

      {tab === 'about' ? (
        <>
          {/* About + Picture: about on left, picture on right */}
          <div className="row align-items-center mb-5 g-4">
            <div className="col-md-8">
              <h2 className="fw-bold mb-3">About</h2>
              <p className="text-secondary lh-lg">
                Motivated and detail-oriented BCA student specializing in AI/ML with hands-on experience
                in frontend and full stack web development. Skilled in building responsive web applications
                using ReactJS, JavaScript, HTML, and CSS, with knowledge of PostgreSQL and scalable
                application architecture. Experienced in collaborating within development teams, using Git
                for version control, and contributing to feature development and deployment.
              </p>
            </div>

            {/* Round profile picture on the right */}
            <div className="col-md-4 d-flex justify-content-center">
              <img
                src={profile_pic}
                alt="Profile"
                className="rounded-circle border border-3 border-primary object-fit-cover"
                style={{ width: '200px', height: '200px', background: '#e9ecef' }}
              />
            </div>
          </div>

          {/* Skill Section: title on left, content on right */}
          <div className="row bg-light rounded-4 p-4 mb-5 g-3">
            <div className="col-md-3">
              <h2 className="fw-bold">Technical Skills</h2>
            </div>
            <div className="col-md-9">
              {[
                { label: 'Languages', items: ['JavaScript', 'HTML5', 'CSS', 'Java', 'C', 'C++', 'Python', 'R', 'MatLab'] },
                { label: 'Frontend', items: ['ReactJS', 'Bootstrap', 'TailwindCSS'] },
                { label: 'Backend', items: ['Node.js', '.NET'] },
                { label: 'Database', items: ['PostgreSQL', 'MySQL'] },
                { label: 'Tools', items: ['Git', 'GitHub', 'Swagger', 'Source Tree', 'Postman'] },
                { label: 'Concepts', items: ['Responsive Design', 'APIs'] },
              ].map(({ label, items }) => (
                <div className="mb-2" key={label}>
                  <span className="text-uppercase fw-semibold text-secondary me-2" style={{ fontSize: '12px', letterSpacing: '.5px' }}>
                    {label}
                  </span>
                  {items.map(item => (
                    <span key={item} className="badge rounded-pill me-1 mb-1" style={{ background: '#ede9fe', color: '#4338ca' }}>
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Resume - full page size */}
          <div className="d-flex justify-content-center align-items-center bg-light rounded-4 mb-5" style={{ minHeight: '80vh' }}>
            <img
              src={resume1}
              alt="Resume"
              className="img-fluid rounded-3 shadow-sm"
              style={{ maxWidth: '500px' }}
            />
            <img
              src={resume2}
              alt="Resume"
              className="img-fluid rounded-3 shadow-sm"
              style={{ maxWidth: '500px' }}
            />
          </div>
        </>
      )}

      {/* Job / Experience Timeline Section */}
      <h2 className="fw-bold text-center mb-4">Experience</h2>
      <div className="position-relative mb-5" style={{ paddingLeft: 0 }}>

        {/* Vertical center line */}
        <div
          className="position-absolute top-0 bottom-0 bg-primary"
          style={{ left: '50%', width: '2px', transform: 'translateX(-50%)' }}
        />

        {/* Job 2 (most recent) - content LEFT, date RIGHT */}
        <div className="row mb-4 align-items-center">
          <div className="col-5 text-end pe-4">
            <div className="card border-0 shadow-sm rounded-4 p-3 text-start">
              <span className="badge rounded-pill mb-2 align-self-start" style={{ background: '#ede9fe', color: '#4338ca' }}>Current</span>
              <h6 className="fw-bold mb-1">Full Stack Developer Intern</h6>
              <p className="text-secondary mb-2" style={{ fontSize: '13px' }}>JailWebSoft Technologies</p>
              <ul className="text-secondary ps-3 mb-0" style={{ fontSize: '13px' }}>
                <li>Developed, tested, and deployed new features on frontend and backend using .NET, ReactJS, Swagger.</li>
                <li>Collaborated with other developers to create a scalable architecture for web applications.</li>
              </ul>
            </div>
          </div>
          {/* Dot */}
          <div className="col-2 d-flex justify-content-center">
            <div
              className="rounded-circle bg-primary border border-3 border-white"
              style={{ width: '14px', height: '14px', outline: '2px solid #4f46e5', zIndex: 1 }}
            />
          </div>
          <div className="col-5 ps-4">
            <span className="text-secondary fw-semibold" style={{ fontSize: '13px' }}>Jan 2026 – Present</span>
          </div>
        </div>

        {/* Job 1 - date LEFT, content RIGHT */}
        <div className="row mb-4 align-items-center">
          <div className="col-5 text-end pe-4">
            <span className="text-secondary fw-semibold" style={{ fontSize: '13px' }}>May 2025 – Nov 2025</span>
          </div>
          {/* Dot */}
          <div className="col-2 d-flex justify-content-center">
            <div
              className="rounded-circle bg-primary border border-3 border-white"
              style={{ width: '14px', height: '14px', outline: '2px solid #4f46e5', zIndex: 1 }}
            />
          </div>
          <div className="col-5 ps-4">
            <div className="card border-0 shadow-sm rounded-4 p-3">
              <h6 className="fw-bold mb-1">Front End Developer Intern</h6>
              <p className="text-secondary mb-2" style={{ fontSize: '13px' }}>JailWebSoft Technologies</p>
              <ul className="text-secondary ps-3 mb-0" style={{ fontSize: '13px' }}>
                <li>Developed responsive web applications using ReactJS and Bootstrap.</li>
                <li>Utilized Git for version control and source code management.</li>
                <li>Collaborated with team members to troubleshoot technical issues.</li>
                <li>Updated website content and layout based on client specifications.</li>
                <li>Built website content and designs using Bootstrap classes.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Project Section */}
      <div className="mb-5">
        <h2 className="fw-bold mb-4">Projects</h2>

        {/* Project 1 */}
        <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
          <div className="row g-4 align-items-start">
            <div className="col-md-6">
              <h5 className="fw-bold mb-2">Adaptive Learning Path Generator</h5>
              <p className="text-secondary lh-lg" style={{ fontSize: '14px' }}>
                I built this project to make learning more personalized and efficient. The system takes a quiz
                from the user, analyzes their performance, and generates a customized learning path based on weak areas.
              </p>
            </div>
            <div className="col-md-6">
              {/* 4-image collage: 2x2 grid */}
              <div className="d-grid gap-1 rounded-3 overflow-hidden" style={{ gridTemplateColumns: '1fr 1fr', display: 'grid', aspectRatio: '1/1' }}>
                <img src={ALPG1} alt="Project screenshot 1" className="img-fluid w-100 h-100 object-fit-cover bg-secondary-subtle" />
                <img src={ALPG2} alt="Project screenshot 2" className="img-fluid w-100 h-100 object-fit-cover bg-secondary-subtle" />
                <img src={ALPG3} alt="Project screenshot 3" className="img-fluid w-100 h-100 object-fit-cover bg-secondary-subtle" />
                <img src={ALPG4} alt="Project screenshot 4" className="img-fluid w-100 h-100 object-fit-cover bg-secondary-subtle" />
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="card border-0 shadow-sm rounded-4 p-4">
          <div className="row g-4 align-items-start">
            <div className="col-md-12">
              <h5 className="fw-bold mb-2">College Management System (CMS)</h5>
              <p className="text-secondary lh-lg" style={{ fontSize: '14px' }}>
                College Management System with three logins: Admin, Teachers, Students. Each has a separate
                dashboard and functionality. Admin can add/view users, courses and departments. Teacher can
                mark attendance and see classes and students. Student can see dashboard and attendance.
              </p>
            </div>
            <div className="col-md-12">
              {/* 4-image collage: 2x2 grid */}
              <div className="d-grid gap-1 rounded-3 overflow-hidden" style={{ gridTemplateColumns: '1fr 1fr', display: 'grid', aspectRatio: '1/1' }}>
                <img src={CMS2} alt="CMS screenshot 1" style={{width: '500px', height: '400px',}} className="img-fluid object-fit-cover bg-secondary-subtle" />
                <img src={CMS3} alt="CMS screenshot 2" className="img-fluid w-100 h-10 object-fit-cover bg-secondary-subtle" />
                <img src={CMS4} alt="CMS screenshot 3" className="img-fluid w-100 h-10 object-fit-cover bg-secondary-subtle" />
                <img src={CMS5} alt="CMS screenshot 4" className="img-fluid w-100 h-10 object-fit-cover bg-secondary-subtle" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Section */}
      <div className="mb-5">
        <h2 className="fw-bold text-center mb-4">Certificates</h2>

        {/* Certificate Card 1 */}
        <div className="card border-0 shadow-sm rounded-4 p-4 mb-3 d-flex flex-row align-items-start gap-4">
          <div className="flex-shrink-0">
            <img
              src={SIH}
              alt="SIH Certificate"
              className="rounded-3 border object-fit-cover"
              style={{ width: '500px', height: '300px', background: '#f3f4f6' }}
            />
          </div>
          <div>
            <h6 className="fw-bold mb-1">Smart India Hackathon 2023</h6>
            <p className="text-secondary mb-0 lh-lg" style={{ fontSize: '13px' }}>
              I participated in the Smart India Hackathon 2023, where I worked in a competitive environment
              to develop innovative solutions for real-world challenges. This experience helped me strengthen
              my teamwork, analytical thinking, and practical development skills.
            </p>
          </div>
        </div>

        {/* Certificate Card 2 */}
        <div className="card border-0 shadow-sm rounded-4 p-4 d-flex flex-row align-items-start gap-4">
          <div className="flex-shrink-0">
            <img
              src={HackCraft}
              alt="HackCraft Certificate"
              className="rounded-3 border object-fit-cover"
              style={{ width: '500px', height: '300px', background: '#f3f4f6' }}
            />
          </div>
          <div>
            <h6 className="fw-bold mb-1">HackCraft 3.0</h6>
            <p className="text-secondary mb-0 lh-lg" style={{ fontSize: '13px' }}>
              I participated in HackCraft 3.0, organized by Global Institute of Technology and Management,
              where I engaged in solving real-world problems in a competitive hackathon environment. This
              experience enhanced my practical skills in development, teamwork, and time management under
              pressure. Through this event, I gained exposure to innovative thinking and collaborative
              problem-solving, while also improving my ability to work efficiently within deadlines.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App