import React from 'react'
import BelowHeader from '../BelowHeader/BelowHeader.jsx'
import Header from "../Header/Header.jsx"
import BrandStatement from '../BrandStatement/BrandStatement.jsx'
import Skills from '../Skills/Skills.jsx'
import Projects from '../Projects/Projects.jsx'
import ContactMe from '../ContactMe/ContactMe.jsx'

function Main() {
  return (
    <div>
      <Header />
      <BelowHeader />
      <BrandStatement />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  )
}

export default Main
