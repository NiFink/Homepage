import { useState } from 'react'
import './App.css'
import Navigation from "./components/Navigation";
import Homepage from "./site/Homepage";
import AboutMe from "./site/AboutMe";
import Projects from "./site/Projects";
import Imprint from "./site/Imprint";


function App() {
  const [currentSite, setSite] = useState("Homepage")
  return (
    <div>
      <Navigation projectClick={() => setSite("Projects") } homepageClick={() => setSite("Homepage") } aboutmeClick={() => setSite("AboutMe")} imprintClick={() => setSite("Imprint")}></Navigation>
      {currentSite === "Homepage" && <Homepage aboutmeClick={() => setSite("AboutMe")} projectsClick={() => setSite("Projects")}></Homepage>}
      {currentSite === "AboutMe" && <AboutMe homepageClick={() => setSite("Homepage")}></AboutMe>}
      {currentSite === "Projects" && <Projects homepageClick={() => setSite("Homepage")}></Projects>}
      {currentSite === "Imprint" && <Imprint homepageClick={() => setSite("Homepage")}></Imprint>}
    </div>
  )
}

export default App
