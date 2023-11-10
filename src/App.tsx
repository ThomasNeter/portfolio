import './App.css'
import Header from './Components/Header.tsx'
import Experience from './Components/Experience.tsx'
import About from './Components/About.tsx'
import Footer from './Components/Footer.tsx'
import resume from './resumeData.json';

function App() {
  const sections = ["Work Experience", "Projects", "Education", "About Me"];

  return (
    <>
      <Header sections={sections} />
      <Experience section={sections[0]} experience={resume.resume.work} />
      <Experience section={sections[1]} experience={resume.resume.projects} />
      <Experience section={sections[2]} experience={resume.resume.education} />
      <About section={sections[3]} about={resume.main}/>
      <Footer footer={resume.main.social}/>
    </>
  )
}

export default App;
