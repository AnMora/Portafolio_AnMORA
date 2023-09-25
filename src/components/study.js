import React, { useEffect } from "react";
import ReactGA from "react-ga";
import "../CSS/general.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Study = (props) => {
  const Study = props.data.Options[1];
  const About = props.data.About[0];

  useEffect(() => {
    AOS.init({ duration: 2000 });

    ReactGA.initialize(About.trackingId);
    // to report page view
    ReactGA.pageview(`/${Study.hash}`);
  }, []);

    const Study_info = props.data.Study.map((item, position) => {
      return (
        <>

            <div key={position} className="row justify-content-center no-gutters mb-5 mb-lg-0">
              <div className="col-lg-6">
                <img
                  className="img-fluid"
                  src={item.img}
                  alt={item.Title}
                  data-aos="fade-up"
                />
              </div>
              <div className="col-lg-6" data-aos="fade-up">
                <div className="bg-two text-center h-100 project">
                  <div className="d-flex h-100">
                    <div className="project-text w-100 my-auto text-center text-lg-left">
                      <h4 className="text-white">{item.Title}</h4>
                      <h4 className="text-danger-secondary">{item.Project_by}</h4>
                      <p className="text-light">{item.Description}</p>
                      <hr className="d-none d-lg-block mb-0 ml-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </>
      )
    });

  return (
    <>
      <section
        id={Study.id}
        className="resume-section projects-section bg-dark-one"
      >
        <div className="resume-section-content">
          <h2 className="mb-5 text-danger-danger">{Study.Option}</h2>
          {Study_info}
        </div>
      </section>
    </>
  );
};

export default Study;
