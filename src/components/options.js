import React, { Component } from "react";
import ReactTooltip from "react-tooltip";

class Options extends Component {
  state = {
    isSwitchOn: false,
  };

  render() {
    // console.log(this.state.isSwitchOn);
    const About = this.props.data.About[0].links;
    const isOn = this.state.isSwitchOn;

    const Options = About.map((item, position) => {
      return (
        <a
          key={position}
          className="social-icon-box mb-1"
          data-tip
          data-for={item.title}
          href={item.link}
          target={item.target}
          rel="noopener noreferrer"
        >
          <i className={item.icon}></i>
          <ReactTooltip
            id={item.title}
            place="left"
            type="dark"
            effect="solid"
          >
            {item.name}
          </ReactTooltip>
        </a>
      );
    });

    return (
      <>
        <div
          className={
            isOn ? "box-options switch-on shadow-lg" : "box-options switch-off"
          }
          onClick={() => this.setState({ isSwitchOn: !isOn })}
        >
          {isOn ? ">" : "<"}

          <div className="box-content shadow-lg">
            <div className="options-box">
              <div className="social-icons-box">
                <a
                  className="social-icon-box mb-1"
                  data-tip
                  data-for="Enviar Correo"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  
                  href="##"
                  rel="noopener noreferrer"
                >
                  <i className="far fa-envelope"></i>
                  <ReactTooltip
                    id="Enviar Correo"
                    place="left"
                    type="dark"
                    effect="solid"
                  >
                    Enviar Correo
                  </ReactTooltip>
                </a>
                {Options}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Options;
