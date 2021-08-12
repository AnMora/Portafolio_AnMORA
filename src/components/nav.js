import React, { Component } from "react";
import logo from "../multimedia/Nll_LllMllTS.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/collapse";
import "../CSS/general.css";
import $ from "jquery";
window.jQuery = $;

class Nav extends Component {
  render() {
    const handleMenu = (e) => {
      $(".navbar-collapse").collapse("hide");
    };

    const About = this.props.data.About[0];

    const Options = this.props.data.Options.map((item,position) => {
      return(
        <li>
          <a key={position} className="nav-link js-scroll-trigger" href={item.hash} onClick={(e) => handleMenu(e)}>
            {item.Option}
          </a>
        </li>
      )
    })

    return (
      <>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-black fixed-top"
          id="sideNav"
        >
          <a className="navbar-brand js-scroll-trigger">
            <span className="d-block d-lg-none">
            {About.First_NickName}<span className="text-danger-danger">{About.LastName}</span>
            </span>
            <span className="d-none d-lg-block">
              <div className="rotate">
                <div className="image">
                  <img
                    className="img-fluid img-profile mx-auto"
                    src={logo}
                    alt="AnM||RA NO_L||M||TS"
                  />
                </div>
              </div>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              {Options}
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
