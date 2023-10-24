import React from 'react'

const Info = () => {
  return (
    <div className="about_info grid">
            <div className="about_box">
            <i className="bx bx-award about_icon"></i>
                <h3 className="about_title">Experience</h3>
                <span className="about_subtitle">SWE intern Visa</span>
            </div>
            <div className="about_box">
            <i className="bx bx-briefcase-alt"></i>
                <h3 className="about_title">Completed</h3>
                <span className="about_subtitle">4+ Projects</span>
            </div>
            <div className="about_box">
            <i className="bx bx-badge-check"></i>
                <h3 className="about_title">Codeforces</h3>
                <span className="about_subtitle">Specialist</span>
        </div>
    </div>
  )
}

export default Info
