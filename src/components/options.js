import React, { Component } from 'react';
import CV from "../Utils/CV_Angel_Mora_Flores.pdf"
import ReactTooltip from "react-tooltip";

export class Options extends Component {
    
    state = {
        isSwitchOn: false,
    }

    render() {
        console.log(this.state.isSwitchOn);
        const isOn = this.state.isSwitchOn;
        const github = "https://github.com/AnMora";
        const linkedin = "https://www.linkedin.com/in/an-mora-56a5b31b5/";
        return (
            <>
                <div className={isOn ? "box-options switch-on" : "box-options switch-off"} onClick={ () => this.setState({isSwitchOn: !isOn}) }>
                    {isOn ? ">" : "<"}

                    <div className="box-content">
                        <div className="options-box">
                            <div className="social-icons-box">
                                <a
                                    className="social-icon-box mb-1"
                                    data-tip
                                    data-for="Enviar Correo"
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    href="##"
                                    rel="noreferrer"
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
                                <a
                                    className="social-icon-box mb-1"
                                    data-tip
                                    data-for="Direction"
                                    href="##"
                                    rel="noreferrer"
                                    onClick={ () => this.setState({isSwitchOn: isOn}) }
                                >
                                    <i className="fas fa-map-marker-alt"></i>
                                    <ReactTooltip
                                        id="Direction"
                                        place="left"
                                        type="dark"
                                        effect="solid"
                                    >
                                        San José, Escazú
                                    </ReactTooltip>
                                </a>
                                <a
                                    className="social-icon-box mb-1"
                                    data-tip
                                    data-for="Telephone"
                                    href="##"
                                    rel="noreferrer"
                                    onClick={ () => this.setState({isSwitchOn: isOn}) }
                                >
                                    <i className="fas fa-mobile-alt"></i>
                                    <ReactTooltip
                                        id="Telephone"
                                        place="left"
                                        type="dark"
                                        effect="solid"
                                    >
                                        (+506) 7254 7757
                                    </ReactTooltip>
                                </a>
                                <a
                                    className="social-icon-box mb-1"
                                    href={CV}
                                    target="_blank"
                                    rel="noreferrer"
                                    data-tip
                                    data-for="Descargar CV"
                                >
                                    <i className="fas fa-file-download"></i>
                                    <ReactTooltip
                                        id="Descargar CV"
                                        place="left"
                                        type="dark"
                                        effect="solid"
                                    >
                                        Descargar CV
                                    </ReactTooltip>
                                </a>
                                <a
                                    className="social-icon-box mb-1"
                                    href={linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    data-tip
                                    data-for="Linkedin"
                                >
                                    <i className="fab fa-linkedin-in"></i>
                                    <ReactTooltip
                                        id="Linkedin"
                                        place="left"
                                        type="dark"
                                        effect="solid"
                                    >
                                        Linkedin
                                    </ReactTooltip>
                                </a>
                                <a
                                    className="social-icon-box mb-1"
                                    href={github}
                                    target="_blank"
                                    rel="noreferrer"
                                    data-tip
                                    data-for="GitHub"
                                >
                                    <i className="fab fa-github"></i>
                                    <ReactTooltip
                                        id="GitHub"
                                        place="left"
                                        type="dark"
                                        effect="solid"
                                    >
                                        GitHub
                                    </ReactTooltip>
                                </a>
                                <a
                                    className="social-icon-box mb-1"
                                    data-tip
                                    data-for="Slack"
                                    href="##"
                                    rel="noreferrer"
                                >
                                    <i className="fab fa-slack" onClick={ () => this.setState({isSwitchOn: isOn}) }></i>
                                    <ReactTooltip
                                        id="Slack"
                                        place="left"
                                        type="dark"
                                        effect="solid"
                                    >
                                        (Slack) An Mora
                                    </ReactTooltip>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default Options;
