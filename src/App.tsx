import { useState } from 'react'
import './App.css'
import Navigation from "./components/Navigation";
import Homepage from "./site/Homepage";
import AboutMe from "./site/AboutMe";
import Projects from "./site/Projects";
import Contact from "./site/Contact";


function App() {
  const [currentSite, setSite] = useState("Homepage")
  return (
    <div>
      <Navigation projectClick={() => setSite("Projects") } homepageClick={() => setSite("Homepage")} contactClick={() => setSite("Contact") }></Navigation>
      {currentSite === "Homepage" && <Homepage aboutmeClick={() => setSite("AboutMe")} projectsClick={() => setSite("Projects")}></Homepage>}
      {currentSite === "AboutMe" && <AboutMe homepageClick={() => setSite("Homepage")}></AboutMe>}
      {currentSite === "Projects" && <Projects homepageClick={() => setSite("Homepage")}></Projects>}
      {currentSite === "Contact" && <Contact homepageClick={() => setSite("Homepage")}></Contact>}
    </div>
  )
}

export default App
