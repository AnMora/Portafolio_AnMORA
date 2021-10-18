import React, { useEffect } from "react";
import "../CSS/general.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Workshops = (props) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);

    const Workshop = props.data.Options[3];

    const Workshops_info = props.data.Workshops.map((item,position) => {
        return(
            <div key={position} className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">{item.Issuer}</h3>
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
            <section className="resume-section" id={Workshop.id}>
                <div className="resume-section-content" data-aos="fade-up">
                <h2 className="mb-5 text-danger-danger">{Workshop.Option}</h2>
                {Workshops_info}
                </div>
            </section>
            <hr className="m-0" />
        </>
    )
}

export default Workshops;