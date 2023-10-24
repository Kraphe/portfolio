import React from 'react'
import './qualification.css'

const Qualification = () => {

  return (
    <section className="qualification section" id="qualification">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My educational journey</span>

        <div className="services_container container grid">

            <div className="services_content">
                    <div>
                        <h3 className="services_title">Btech<hr/><br/> Delhi Technological<br/>  University</h3>
                        <i className="uil uil-calendar-alt"></i> 2020 - Present
                    </div>
                
                    <i className="uil uil-arrow-right services_button-icon">8.5 CGPA</i>
            </div>

            
            <div className="services_content">
                    <div>
                        <h3 className="services_title">12th Class<hr/><br/>Dhanpatmal Virmani <br/> Sr. Sec. School </h3>
                        <i className="uil uil-calendar-alt"></i> 2018 - 2019
                    </div>
                
                    <i className="uil uil-arrow-right services_button-icon">88.2 percentage</i>
            </div>
            
            <div className="services_content">
                    <div>
                        <h3 className="services_title">10th Class<hr/><br/> Nalanda Modern<br/> Sr. Sec. School</h3>
                        <i className="uil uil-calendar-alt"></i> 2016 - 2017
                    </div>
                
                    <i className="uil uil-arrow-right services_button-icon">8.4 GPA</i>
            </div>

        </div>

    </section>

  )
}

export default Qualification