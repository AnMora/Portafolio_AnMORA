import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import '../CSS/general.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = (props) => {
  const proPractice = props.data.Options[5];
  const About = props.data.About[0];

    useEffect(() => {
      AOS.init({ duration: 2000 });

      ReactGA.initialize(About.trackingId);
      // to report page view
      ReactGA.pageview(`/${proPractice.hash}`);
    }, []);

    const Pro_info = props.data.Pro_Practice.map((item,position) => {
        return(
            <div key={position} className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0 text-secondary">{item.Workplace_nick}</h3>
                <h3 className="mb-0 text-danger-danger">{item.Workplace}</h3>
                <div className="subheading mb-3">{item.position}</div>
                <div>Encargado: {item.supervisor}</div>
                {item.cellphone === "No obtenido" ? ("") : (<div>Telefono: {item.cellphone}</div>)}
                {item.range === "No obtenido" ? ("") : (<div>Jerarquia: {item.range}</div>)}
                <br />
                <p>{item.job_description}</p>
                {item.link_verified === "" ? "" : (
                  <a className="text-danger-danger" href={item.link_verified} target="_blank" rel="noopener noreferrer">
                    <button type="button" className="btn btn-outline-dark text-danger-danger">
                      Visitar sitio
                    </button>
                  </a>
                )}
                {item.Ubication === "No obtenido" ? ("") : (<div>Ubicacion: {item.Ubication}</div>)}
                {item.telephone === "No obtenido" ? ("") : (<div>Telefono: {item.telephone}</div>)}
              </div>
              <div className="flex-shrink-0">
                {item.phrase === "Actualmente" ? (
                  <span className="text-danger-danger">{item.since_On_Day} {item.since_On_Month} {item.since_On_Year} - {item.phrase}</span>
                ) : (
                  <span className="text-danger-danger">{item.since_On_Day} {item.since_On_Month} {item.since_On_Year} - {item.until_On_Day} {item.until_On_Month} {item.until_On_Year}</span>
                )}
              </div>
            </div>
        )
      })

    return (
        <>
            <section className="resume-section bg-dark-one" id={proPractice.id}>
                <div className="resume-section-content text-white" data-aos="fade-up">
                <h2 className="mb-5 text-danger-danger">{proPractice.Option_complete}</h2>
                {/* <h4 className="mb-5 text-danger-danger">Cantidad de Horas: {item.Total_Hours}</h4> */}
                {Pro_info}
                </div>
            </section>
            <hr className="m-0" />
        </>
    )
}

export default Experience;
