import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import SIH from './assets/SIH.png'
// import './App.css'

function App() {
  const [tab, setTab] = useState('about')

  return (
    <>
      {/* at the top */}
      <h1 className='main-heading'>Portfolio</h1>

      {/* Hero srction should be like a navigation page */}
      <div className='navigation'>
        <button className='navigation-button' onClick={()=>setTab('about')}>About</button>
        <button className='navigation-button' onClick={()=>setTab('resume')}>Resume</button>
      </div>

      {tab === 'about' ? (
        <>
          {/* about should be on left side and picture should be on right side */}
          <div className="about-section">
            <div className='about'>
              <h2>About</h2>
              <p>Motivated and detail-oriented BCA student specializing in AI/​ML with hands-on experience in frontend and full stack web development. Skilled in building responsive web applications using ReactJS, JavaScript, HTML, and CSS, with knowledge of PostgreSQL and scalable application architecture. Experienced in collaborating within development teams, using Git for version control, and contributing to feature development and deployment.</p>
            </div>

            {/* picture should be on right and in round shape */}
            <div className="picture">
              <img src='' alt="" />
            </div>
          </div>

          <div className="skill-section">
            <h2>Technical Skills</h2>
            <p> <b> Languages </b>: JavaScript, HTML5, CSS, Java, C, C++, Python, R, MatLab</p>
            <p> <b> Frontend </b>: ReactJS, Bootstrap, TailwindCSS</p>
            <p> <b> Backend </b>: Node.js, .NET</p>
            <p> <b> Database </b>: PostgreSQL, MySQL</p>
            <p> <b> Tools </b>: Git, GitHub, Swagger, Source Tree, Postman</p>
            <p> <b> Concept </b>: Responsive Design, APIs</p>
          </div>
        </>
      ) : (
        <>
          <div className="resume-section">
            {/* should be on full page size. give style as needed */}
            <img src='' alt="" />
          </div>
        </>
      )}

      <div className="job-section">
        {/* should be on left side like a card with transparent background and a line shouwing timeline*/}
        {/* Job 2 */}
        <div className="job left-side">
          <h3><b>Full Stack Developer Intern</b>, JailWebSoft Technologies</h3>
          <ul>
            <li>Developed, tested, and deployed new features on frontend and backend using .NET, ReactJS, Swagger. </li>
            <li>Collaborated with other developers to create a scalable architecture for web applications and their execution</li>
          </ul>
        </div>

        <div className="right-side">
          Jan 2026 - Present
        </div>

        {/* Job 1 */}
        <div className="left-side">
          May 2025 - Nov 2025
        </div>

        <div className="job right-side">
          <h3><b>Front End Developer Intern</b>, JailWebSoft Technologies</h3>
          <ul>
            <li>Developed responsive web applications using ReactJS and Bootstrap, improving UI performance and cross-device compatibility.</li>
            <li>Utilized version control systems such as Git to manage source code changes.</li>
            <li>•Collaborated with team members to troubleshoot and resolve technical issues.</li>
            <li>Updated website content and layout based on client specifications and requirements.</li>
            <li>Built website content and designs using BootStrap Classes</li>
          </ul>
        </div>
      </div>

      {/* project section i want a about section and below that a collection of four images in 4 squares together make a one big square */}
      <div className="project-section">
        {/* title should be on left side */}
        <h2 className='title'>Pojects</h2>

        <div className="project">
          <h3 className="title">Adaptive Learning Path Generator</h3>

          <p className="about">I built this project to make learning more personalized and efficient. The system takes a quiz from the user, analyzes their performance, and generates a customized learning path based on weak areas.</p>

          {/* image collage (4 image together make one big image square size) */}
          <div className="image-collection">
            <img src="" alt="" className="img1" />
            <img src="" alt="" className="img2" />
            <img src="" alt="" className="img3" />
            <img src="" alt="" className="img4" />
          </div>
        </div>

        <div className="project">
          <h3 className="title">College Management System (CMS)</h3>

          <p className="about">College Management System with three logins: Admin, Teachers, Students. Each have a seperate dashboard and Functionality. Admin can add/view users, course and departments Teacher can mark attendance and see classes and students. Student can see dashboard and attendance</p>

          {/* image collage (4 image together make one big image square size) */}
          <div className="image-collection">
            <img src="" alt="" className="img1" />
            <img src="" alt="" className="img2" />
            <img src="" alt="" className="img3" />
            <img src="" alt="" className="img4" />
          </div>
        </div>
      </div>

      <div className="certificate-section">
        {/* title should be on center and bold */}
        <h2 className='title'>Certificates</h2>

        <div className="card">
          {/* iamge should be on left of card and about on right of card */}
          <div className="picture">
            <img src={SIH} alt="" />
          </div>
          <div className="about">
            <p>I participated in the Smart India Hackathon 2023, where I worked in a competitive environment to develop innovative solutions for real-world challenges. This experience helped me strengthen my teamwork, analytical thinking, and practical development skills.</p>
          </div>
        </div>

        <div className="card">
          {/* iamge should be on left of card and about on right of card */}
          <div className="picture">
            <img src="" alt="" />
          </div>
          <div className="about">
            <p>I participated in HackCraft 3.0, organized by Global Institute of Technology and Management, where I engaged in solving real-world problems in a competitive hackathon environment. This experience enhanced my practical skills in development, teamwork, and time management under pressure.

              Through this event, I gained exposure to innovative thinking and collaborative problem-solving, while also improving my ability to work efficiently within deadlines.</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
