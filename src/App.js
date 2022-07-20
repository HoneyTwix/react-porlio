import "./App.css"
import React, { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AboutMe from "./components/AboutMe"
import Project from "./components/Project"
import Resume from "./components/Resume"
import Nav from "./components/Navigation"

function App() {
  const [section, setSection] = useState("about")

  return (
    
    <>
      <Header section={section} setSection={setSection} />
      <Nav/>
        <div className="App">

          < AboutMe />
          {section === "main" && < Main />}
          < Resume />

        </div>
      <Footer />
    </>

    
  )
}


export default App