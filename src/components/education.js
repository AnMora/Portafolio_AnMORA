import React, { useEffect } from "react";
import ReactGA from "react-ga";
import "../CSS/general.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = (props) => {
  const Education = props.data.Options[1];  
  const About = props.data.About[0];

  useEffect(() => {
    AOS.init({ duration: 2000 });

    ReactGA.initialize(About.trackingId);
    // to report page view
    ReactGA.pageview(`/${Education.hash}`);
  }, []);

  const Education_info = props.data.Education.map((item,position) => {
    return(
        <div key={position} className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">{item.Issuer}</h3>
            <div className="subheading mb-3">{item.Title}</div>
            <p>{item.Description}</p>
            {item.Level !== "No obtenido" ? (
              <div>Nivel de cualificación: {item.Level}</div>
            ) : ("")}
            <div>Horas: {item.Total_Hours} Horas</div>
            <div>Expira en: {item.Expired_On}</div>
            <br />
            {item.link_verified !== "No obtenido" || item.link_name !== "No obtenido" ? (
              <a className="text-danger-danger" href={item.link_verified} target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn btn-outline-secondary text-danger-danger">
                  Ver certificado
                </button>
              </a>
            ) : ("")}
            {item.Register_No !== "No obtenido" ? (
              <div>Register No. {item.Register_No}</div>
            ) : ("")}
          </div>
          <div className="flex-shrink-0">
            <span className="text-danger-danger">Emitido: {item.Issued_On_Day} {item.Issued_On_Month} {item.Issued_On_Year}</span>
          </div>
        </div>
    )
  })

  return (
    <>
      <section className="resume-section" id={Education.id}>
        <div className="resume-section-content" data-aos="fade-up">
          <h2 className="mb-5 text-danger-danger">{Education.Option}</h2>
          {/* <h4 className="mb-5 text-danger-danger">Cantidad de Horas: {item.Total_Hours}</h4> */}
          {Education_info}
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
};

export default Education;
