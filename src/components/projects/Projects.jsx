
import React, { useState } from 'react';
import './projects.css';

const Projects = () => {
  const [toggleStates, setToggleStates] = useState([false, false, false, false, false]);

  const toggleTab = (index) => {
    const newToggleStates = [...toggleStates];
    newToggleStates[index] = !newToggleStates[index];
    setToggleStates(newToggleStates);
  };

  const servicesData = [
    {
      link: "https://drive.google.com/file/d/1jvIRrxR4-Ui8H36iM9FQesq-JnPntn0f/view?usp=sharing",
      icon: 'uil-web-grid',
      title: "Visa SWE intern",
      modalTitle: "Backened Engineer",
      modalDescription: "Providing quality work to team and company.",
      modalServices: [
        "Migrate data from hadoop to Dell ECS S3.",
        "Avoided accidental deletion of data.",
        "COntibuted in unit testing of service layer.",
        "Acieved 86 percentage code coverage.",
        "Tech-stack: Java & springboot"
      ],
    },
    {
      link: 'https://github.com/Kraphe/RealTime-Pizza',
      icon: 'uil-pizza-slice',
      title: "Pizza ordering website",
      modalTitle: "Full stack website",
      modalDescription: "Developed a pizza ordering web site within a project timeline of 10 week.",
      modalServices: [
        "Implemented secure user authentication services.",
        "Implemented cart functionality user can add or remove item.",
        "User can track order history.",
        "Design User friendly interface",
        "Tech-stack: HTML, CSS, Javascript, MongoDb, Node.js"
      ],
    },
    {
      link: 'https://github.com/Kraphe/NewsSphere',
      icon: 'uil-newspaper',
      title: "News Website",
      modalTitle: "React & API based project ",
      modalDescription: "Developed NewsSphere a online news Website within a timeline of 2 week.",
      modalServices: [
        "I developed NewsSphere a online news website",
        "It show all the news around the world for this curated news I used NEWSAPI",
        "User can fillter news on the basis of country, language, and topic",
        "Tech-stack: React & Bootstrap"
      ],
    },
    {
      link: 'https://github.com/Kraphe/Game-Mania',
      icon: 'uil-volleyball',
      title: "Game Mania",
      modalTitle: "Javascript project",
      modalDescription: "Developed interactive and engaging games.",
      modalServices: [
        "Developed Tic-Tac-Toe and Memory Card Game.",
        "Created a classic Tic-Tac-Toe game, implementing two-player functionality for a competitive gaming experience.",
        "Developed a captivating memory card game featuring a time-bounded, single-player mode.",
        "Tech-stack: HTML, CSS, Javascript"
      ],
    },
    {
      link: 'https://raphe.netlify.app/',
      icon: 'uil-user',
      title: "Portfolio",
      modalTitle: "My professional portfolio",
      modalDescription: "A website showcasing my skills and achievements.",
      modalServices: [
        "Develop the elegant website showing my journey",
        "Tech-stack: HTML, CSS, React"
      ],
    },
  ];

  return (
    <section className="services section" id="services">
      <h2 className="section_title">Internship and personal projects</h2>
      <span className="section_subtitle">What I have done</span>

      <div className="services_container container grid">
        {servicesData.map((service, index) => (
          <div className="services_content" key={index}>
            <div>
            <i className={`uil ${service.icon} services_icon`}></i>
              {/* <i  className=" services_icon"></i> */}
              <h3 className="services_title">{service.title}</h3>
            </div>
            <span className="services_button" onClick={() => toggleTab(index)}>
              Read More{" "}
              <i className={`uil uil-arrow-right services_button-icon ${toggleStates[index] ? "active" : ""}`}></i>
            </span>
            <br></br>
            <a className="services_button" href={service.link}>
              View{" "}
              <i className='uil uil-arrow-right services_button-icon'></i>
            </a>

            <div className={`services_modal ${toggleStates[index] ? "active-modal" : ""}`}>
              <div className="services_modal-content">
                <i onClick={() => toggleTab(index)} className="uil uil-times services_modal-close"></i>
                <h3 className="services_modal-title">{service.modalTitle}</h3>
                <p className="services_modal-description">{service.modalDescription}</p>
                <ul className="services_modal-services grid">
                  {service.modalServices.map((item, i) => (
                    <li className="services_modal-service" key={i}>
                      <i className="uil uil-check-circle services_modal-icon"></i>
                      <p className="services_modal-info">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

