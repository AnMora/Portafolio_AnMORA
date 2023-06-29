import React, { useEffect } from "react";
import ReactGA from 'react-ga';
import "../CSS/general.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Workshops = (props) => {
  const Workshop = props.data.Options[4];
  const About = props.data.About[0];

    useEffect(() => {
      AOS.init({ duration: 2000 });

      ReactGA.initialize(About.trackingId);
      // to report page view
      ReactGA.pageview(`/${Workshop.hash}`);
      }, []);

    const Workshops_info = props.data.Workshops.map((item,position) => {
        return(
            <div key={position} className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0 text-secondary">{item.Issuer}</h3>
                <div className="subheading mb-3">{item.Title}</div>
                <p>{item.Description}</p>
                {item.Total_Hours !== "" ? (
                    <div>Horas: {item.Total_Hours} Horas</div>
                ) : ("")}
                {item.Total_Classes !== "" ? (
                    <div>Cantidad de Clases: {item.Total_Classes} Clases</div>
                ) : ("")}
                <br />
              </div>
              <div className="flex-shrink-0">
                <span className="text-danger-danger">Emitido: {item.Issued_On_Day} {item.Issued_On_Month} {item.Issued_On_Year}</span>
              </div>
            </div>
        )
      })

    return (
        <>
            <section className="resume-section bg-dark-one" id={Workshop.id}>
                <div className="resume-section-content text-white" data-aos="fade-up">
                <h2 className="mb-5 text-danger-danger">{Workshop.Option}</h2>
                {Workshops_info}
                </div>
            </section>
        </>
    )
}

export default Workshops;
