import React from 'react'
import './skills.css'
import Frontend from './Frontend'
import Backened from './Backened'
import Core from './Core'
import Programming from './Programming'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My technical level</span>
        <div className="skills_container container grid">
            <Frontend/>
            <Backened/>
            <Programming/>
            <Core/>
        </div>

    </section>
  )
}

export default Skills
