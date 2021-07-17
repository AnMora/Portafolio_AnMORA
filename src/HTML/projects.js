import React, { useEffect } from "react";
import image01 from "../multimedia/demo-image-01.jpg";
import image02 from "../multimedia/demo-image-02.jpg";
import "../CSS/general.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = (props) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const Projects = props.data.Options[5];

  const Projects_info = props.data.Projects.map((item, position) => {
    return (
      <>
        {position % 2 ? (
          <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div className="col-lg-6">
              {item.img === "image01" ? (
                <img
                  className="img-fluid"
                  src={image01}
                  alt=""
                  data-aos="fade-up"
                />
              ) : (
                <img
                  className="img-fluid"
                  src={image02}
                  alt=""
                  data-aos="fade-up"
                />
              )}
            </div>
            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-left" data-aos="fade-up">
                    <h4 className="text-white">{item.Title}</h4>
                    <h4 className="text-danger-danger">{item.Project_by}</h4>
                    <p>{item.Description}</p>
                    <div>
                      Link:{" "}
                      <a
                        className="text-danger-danger"
                        href="{item.link_verified}"
                        target="_blank"
                      >
                        {item.link}
                      </a>
                    </div>
                    <hr className="d-none d-lg-block mb-0 ml-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            {item.img === "image01" ? (
              <img
                className="img-fluid"
                src={image01}
                alt=""
                data-aos="fade-up"
              />
            ) : (
              <img
                className="img-fluid"
                src={image02}
                alt=""
                data-aos="fade-up"
              />
            )}
          </div>
          <div className="col-lg-6 order-lg-first" data-aos="fade-up">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">{item.Title}</h4>
                  <h4 className="text-danger-danger">{item.Project_by}</h4>
                  <p>{item.Description}</p>
                  <div>
                    Link:{" "}
                    <a
                      className="text-danger-danger"
                      href="{item.link_verified}"
                      target="_blank"
                    >
                      {item.link}
                    </a>
                  </div>
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
        className="resume-section projects-section"
      >
        <div className="resume-section-content" data-aos="fade-up">
          <h2 className="mb-5 text-danger-danger">{Projects.Option}</h2>
          
          {Projects_info}
        </div>
      </section>
    </>
  );
};

export default Projects;

// Además de ser desarrollador web, disfruto la mayor parte del tiempo al aire libre. En el invierno, soy un ávido esquiador y un escalador de hielo novato. Durante los meses más cálidos aquí en Colorado, disfruto del ciclismo de montaña, la escalada libre y el kayak.

// Cuando me obligan a entrar en casa, sigo una serie de películas y programas de televisión de ciencia ficción y fantasía, soy un aspirante a chef y dedico gran parte de mi tiempo libre a explorar los últimos avances tecnológicos en el mundo del desarrollo web front-end.
