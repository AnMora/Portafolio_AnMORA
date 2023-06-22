import React, { useEffect } from "react";
import ReactGA from 'react-ga';
import "../CSS/general.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = (props) => {
  const Projects = props.data.Options[7];
  const About = props.data.About[0];

  useEffect(() => {
    AOS.init({ duration: 2000 });

    ReactGA.initialize(About.trackingId);
    // to report page view
    ReactGA.pageview(`/${Projects.hash}`);
  }, []);

  const Projects_info = props.data.Projects.map((item, position) => {
    return (
      <>
        {position % 2 ? (
          <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src={item.img}
                alt={item.Title}
                data-aos="fade-up"
              />
            </div>
            <div className="col-lg-6" data-aos="fade-up">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-left">
                    <h4 className="text-white">{item.Title}</h4>
                    <h4 className="text-danger-danger">{item.Project_by}</h4>
                    <p className="text-light">{item.Description}</p>
                    <a className="text-danger-danger" href={item.link} target="_blank" rel="noopener noreferrer">
                      <button type="button" className="btn btn-outline-primary text-danger-danger">
                        Ver sitio
                      </button>
                    </a>
                    <hr className="d-none d-lg-block mb-0 ml-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
              <img
                className="img-fluid"
                src={item.img}
                alt={item.Title}
                data-aos="fade-up"
              />
          </div>
          <div className="col-lg-6 order-lg-first" data-aos="fade-up">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">{item.Title}</h4>
                  <h4 className="text-danger-danger">{item.Project_by}</h4>
                  <p className="text-light">{item.Description}</p>
                  <a className="text-danger-danger" href={item.link} target="_blank" rel="noopener noreferrer">
                    <button type="button" className="btn btn-outline-dark text-danger-danger">
                      Ver sitio
                    </button>
                  </a>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
      </>
    )
  });

  return (
    <>
      <section
        id={Projects.id}
        className="resume-section projects-section bg-dark-one"
      >
        <div className="resume-section-content text-white">
          <h2 className="mb-5 text-danger-danger">{Projects.Option}</h2>
          {Projects_info}
          <h4 className="mt-3 text-white" data-aos="fade-up">Pronto se mostrarán más proyectos que siguen en producción...</h4>
        </div>
      </section>
    </>
  );
};

export default Projects;
