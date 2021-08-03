import React, { useEffect, useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import GoogleLogin from 'react-google-login';
import emailjs from 'emailjs-com';
import ReactTooltip from "react-tooltip";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CV from "../Utils/CV_Angel_Mora_Flores.pdf"
import "../CSS/general.css";
import AOS from "aos";
import "aos/dist/aos.css";

toast.configure();

const About = (props) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [captchaValido, setCaptchaValido] = useState(null);
  const [usuarioValido, setUsuarioValido] = useState(false);
  const [emailValido, setEmailValido] = useState(false);

  const captcha = useRef(null);

  const onChange = () => {
    if (captcha.current.getValue()) {
      setCaptchaValido(true);
    }
  };
  
  const About = props.data.About[0];

  const service = About.service;
  const template = About.template;
  const user = About.user;
  const clientId = About.clientId
  const siteKey = About.siteKey
  
  const responseGoogle = (req) => {
    const email = req.profileObj.email;
    console.log(email)
    setEmailValido(true);
    return setEmail(email);
  }

  // const { almacenada } = responseGoogle;
  // console.log(almacenada);

  const enviarEmail = (e) => {
    e.preventDefault();
    if(email === "" || asunto === "" || descripcion === ""){
      toast.error(`Porfavor, completa los datos!`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setUsuarioValido(true);
      setCaptchaValido(false);
    }else{
      if (captcha.current.getValue()) {
        emailjs.sendForm(service, template, e.target, user)
        .then((result) => {
          toast.success(`El correo se envio exitosamente!`, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }, (error) => {
            // console.log(error.text);
            toast.error(error.message, {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
        });
        setUsuarioValido(true);
        setCaptchaValido(true);
      } else {
        toast.error(`Porfavor, acepta el captcha!`, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        setUsuarioValido(true);
        setCaptchaValido(false);
      }
    }
  };

  const About_id = props.data.Options[0];

  const About_icons = props.data.About[0].links.map((item, position) => {
    if(position === 0){
      return (
        <>
          <a
            key={position}
            className="social-icon mb-1"
            data-tip
            data-for={item.name}
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <i className={item.icon}></i>
            <ReactTooltip
              id={item.name}
              place="bottom"
              type="dark"
              effect="solid"
            >
              {item.name}
            </ReactTooltip>
          </a>
        </>
      )
    }else {
      if(item.name === "Descargar CV"){
        return (
          <>
            <a
              key={position}
              className="social-icon mb-1"
              href={CV}
              target="_blank"
              data-tip
              data-for={item.name}
            >
              <i className={item.icon}></i>
              <ReactTooltip
                id={item.name}
                place="bottom"
                type="dark"
                effect="solid"
              >
                {item.name}
              </ReactTooltip>
            </a>
          </>
        )
      }else{
        return (
          <>
            <a
              key={position}
              className="social-icon mb-1"
              href={item.link}
              target="_blank"
              data-tip
              data-for={item.name}
            >
              <i className={item.icon}></i>
              <ReactTooltip
                id={item.name}
                place="bottom"
                type="dark"
                effect="solid"
              >
                {item.name}
              </ReactTooltip>
            </a>
          </>
        )
      }
    }
  });

  return (
    <>
      <section className="resume-section" id={About_id.id}>
        <div className="resume-section-content" data-aos="fade-up">
          <h1>
            {About.Name}
            <span className="text-danger-danger">{About.LastName}</span>
          </h1>
          <p>{About.description}</p>
          <p>{About.second_description}</p>
          <div className="social-icons">{About_icons}</div>
        </div>
      </section>
      <hr className="m-0" />

    {/* MODAL */}
      <div
        className="modal"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalScrollableLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Enviar Correo</h5>
            </div>
            <form onSubmit={enviarEmail}>
              <div className="modal-body">
                <div className="form-group">
                  <div className="row">
                    {!emailValido && 
                      <>
                        <label className="col-sm-2 col-form-label">
                          De
                        </label>
                        <div className="col-sm-10">
                          <GoogleLogin
                            clientId={clientId}
                            buttonText="Verifica tu correo"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                          />
                        </div>
                      </>
                    }
                    {emailValido && 
                      <>
                        <label className="col-sm-2 col-form-label">
                          De
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="email"
                            readonly=""
                            className="form-control-plaintext"
                            value={email}
                            name="email"
                            onChange={e => setEmail(e.target.value)}
                          />
                        </div>
                      </>
                    }
                    {/* <div className="col-sm-6">
                      <input
                        type="email"
                        className="form-control-plaintext"
                        placeholder="email@example.com"
                        value={email}
                        name="email"
                        onChange={e => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-sm-4">
                      <GoogleLogin
                        clientId="820641787972-k7l8h3q7a4mt28maotjod30ffqirrq8l.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                      />
                    </div> */}
                    <label
                      className="col-sm-2 col-form-label"
                    >
                      Para
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        readonly=""
                        className="form-control-plaintext"
                        value="anmora.2396@gmail.com"
                      />
                    </div>
                  </div>
                  <label className="form-label">
                    Asunto
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    value={asunto}
                    name="asunto"
                    onChange={e => setAsunto(e.target.value)}
                  />
                  <label className="form-label">
                    Descripcion
                  </label>
                  <textarea
                    className="form-control"
                    rows="3"
                    name="descripcion"
                    value={descripcion}
                    onChange={e => setDescripcion(e.target.value)}
                  ></textarea>
                </div>
                <ReCAPTCHA
                  ref={captcha}
                  sitekey={siteKey}
                  onChange={onChange}
                />
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* MODAL */}
    </>
  );
};

export default About;