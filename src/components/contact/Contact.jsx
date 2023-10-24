import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        
        <h2 className="section_title">Get in touch</h2>
        <span className="section_subtitle">Contact Me</span>
        <div className="contact_container container grid">
            <div className="contact_content">
            <h3 className="contact_title">Talk to me</h3> 

                <div className="contact_info">
                    <div className="contact_card">
                        <i className="bx bx-mail-send contact_card-icon"></i>
                        <h3 className="contact_card-title">Email</h3>
                        <span className="contact_card-data">kraphe001@gmail.com</span>
                        <a href="" className="contact_button">
                        Write me{" "}
                        <i className="bx bx-right-arrow-alt
                        contact_button-icon"></i>
                    </a>
                    </div>

                    <div className="contact_card">
                        <i className="fa-brands fa-whatsapp "></i>
                        <i class="fa-brands fa-whatsapp"></i>
                        <h3 className="contact_card-title">Whatsapp</h3>
                        <span className="contact_card-data">9971205510</span>
                        <a href="" className="contact_button">
                        Write me{" "}
                        <i className="bx bx-right-arrow-alt
                        contact_button-icon"></i>
                    </a>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
