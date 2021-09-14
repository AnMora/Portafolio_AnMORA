import React, { useEffect } from "react";
import ReactTooltip from "react-tooltip";
import "../CSS/general.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = (props) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const Skills = props.data.Options[5];

  const Skills_info = props.data.Skills[0];

  const Skills_icons = props.data.Skills[0].links.map((item, position) => {
    return (
      <li key={position} className="list-inline-item social-icon" data-tip data-for={item.name}>
        <i className={item.icon}></i>
        <ReactTooltip id={item.name} place="bottom" type="dark" effect="solid">{item.name}</ReactTooltip>
      </li>
    )
  })

  const Skills_workflow = props.data.Skills[0].description.map((item, position) => {
    return (
      <li key={position}>
        <span className="fa-li">
          <i className="fas fa-check text-danger-danger" alt={item.name}></i>
        </span>
        {item.flujo}
      </li>
    )
  })

  return (
    <>
      <section className="resume-section" id={Skills.id}>
        <div className="resume-section-content" data-aos="fade-up">
          <h2 className="mb-5 text-danger-danger">{Skills.Option}</h2>
          <div className="subheading mb-3">{Skills_info.subheading}</div>
          <ul className="list-inline dev-icons social-icons">
            {Skills_icons}
          </ul>
          <div className="subheading mb-3">{Skills_info.workflow}</div>
          <ul className="fa-ul mb-0">
            {Skills_workflow}
          </ul>
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
};

export default Skills;
