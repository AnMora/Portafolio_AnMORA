import React, { useEffect } from "react";
import ReactGA from 'react-ga';
import ReactTooltip from "react-tooltip";
import "../CSS/general.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = (props) => {
  const Skills = props.data.Options[6];
  const About = props.data.About[0];

  useEffect(() => {
    AOS.init({ duration: 2000 });

    ReactGA.initialize(About.trackingId);
    // to report page view
    ReactGA.pageview(`/${Skills.hash}`);
  }, []);

  const Skills_info = props.data.Skills[0];

  const Skills_workflow = props.data.Skills[0].description.map((item, position) => {
    return (
      <li key={position}>
        <span className="fa-li">
          <i className="fas fa-check text-danger-danger" alt={item.name}></i>
        </span>
        <p>{item.flujo}</p>
      </li>
    )
  })

  // const Skills_icons = props.data.Skills[0].links.map((item, position) => {
  //   return (
  //     <li key={position} className="list-inline-item social-icon" data-tip data-for={item.name}>
  //       <i className={item.icon}></i>
  //       <ReactTooltip id={item.name} place="bottom" type="dark" effect="solid">{item.name}</ReactTooltip>
  //     </li>
  //   )
  // })

  const Skills_icons = props.data.Skills[0].links.map((item, position) => {
    return (
        <div key={position} className="col-xl-3 col-md-6 mb-4" data-tip data-for={item.name}>
          <div className="bg-two card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center p-2">
                <div className="col mr-2">
                  <p className="text-danger-secondary h6">{item.name}</p>
                  {/* <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div className="h5 mb-0 mr-3 font-weight-bold text-light">{item.porcent}</div>
                    </div>
                    <div className="col">
                      <div className="progress progress-sm mr-2">
                        <div className="progress-bar bg-one" role="progressbar" style={{width: item.porcent}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="col-auto">
                  <i className={item.icon}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  })

  return (
    <>
      <section className="resume-section bg-dark-one" id={Skills.id}>
        <div className="resume-section-content text-white" data-aos="fade-up">
          <h2 className="mb-5 text-danger-secondary">{Skills.Option}</h2>
          <div className="subheading mb-3">{Skills_info.workflow}</div>
          <ul className="fa-ul mb-0">
            {Skills_workflow}
          </ul>
          <div className="subheading mb-3">{Skills_info.subheading}</div>
          <ul className="list-inline dev-icons social-icons">
            <div className="row">
              {Skills_icons}
            </div>
          </ul>
         </div> 
      </section>
    </>
  );
};

export default Skills;
