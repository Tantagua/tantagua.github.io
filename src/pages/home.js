import React, { useState } from "react";
import video from "../img/tantagua.mp4";
import Galery from "../pages/galery";
import { init, send } from "@emailjs/browser";
import whatsapp from "../img/button.svg";
import { Link as Down } from "react-scroll";
import { Link } from "react-router-dom";

init("user_aUU0Vn7SifIuuMMkkLn9o");

function Home() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    send(
      "gmail_mensaje",
      "template_u60fnwe",
      toSend,
      "user_aUU0Vn7SifIuuMMkkLn9o"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="header">
        <div>
          <video autoPlay loop muted className="video-background">
            <source src={video} />
          </video>
          <div className="overly"></div>

          <h1 className="titulo-header">
            Tantagua, Hermosa Tierra lista para ti.
          </h1>
          <p className="desc">
            En el km 127 a solo dos horas de Quito, lejos del ruido y rodeado de
            naturaleza, junto al gran río silanche, te ofrecemos hermosa tierra
            lista para sembrar lo que tu quieras ¿Qué esperas? Ven y conoce.
          </p>
          <Down to="more" spy={true} smooth={true} offset={-60} duration={500}>
            <button className="btn-header">Mas información</button>
          </Down>
        </div>
      </div>
      <div id="more" name="more" className="galery-cont">
        <div>
          <Galery />
          <Link to="/galeria">
            <button className="vermas">Ver más</button>
          </Link>
        </div>
        <div>
          <p className="desc-slider">
            orta purus nec est maximus, luctus congue orci iaculis. Pellentesque
            sed euismod lectus. Sed volutpat velit quis ligula fringilla, a
            finibus eros sodales. iaculis. Pellentesque sed euismod lectus. Sed
            volutpat velit quis ligula fringilla, a finibus eros sodales. Elit.
            Curabitur pharetra molestie accumsan. Proin Pellentesque sed euismod
            lectus. Sed volutpat velit quis!
          </p>
        </div>
      </div>
      <div className="contact">
        <div className="map">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="600"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=0.14230740070343018,-79.15391540527344&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                title="Tantagua"
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <h1 className="center-title">Contacto</h1>
          <center>
            <h3>Contáctanos y resuelve todas tus dudas.</h3>
          </center>
          <div className="contact-block">
            <p>TELF: (+593) 99 401 3090</p>
            <a
              style={{ marginLeft: "1vw" }}
              href="mailto:guillo.roba@gmail.com"
            >
              guillo.roba@gmail.com
            </a>
            <br></br>
            <a
              rel="noreferrer"
              href="https://api.whatsapp.com/send?phone=0994013090"
              target="_blank"
            >
              <img className="button-whats" src={whatsapp} alt="whatsapp"></img>
            </a>
          </div>
          <div className="form">
            <div className="form-cont">
              <form className="form" onSubmit={onSubmit}>
                <input
                  autoComplete="off"
                  className="input-news"
                  id="fromName"
                  type="text"
                  name="from_name"
                  placeholder="Nombre"
                  color="default"
                  value={toSend.from_name}
                  onChange={handleChange}
                />
                <input
                  autoComplete="off"
                  className="input-news"
                  type="text"
                  name="to_name"
                  placeholder="Teléfono"
                  value={toSend.to_name}
                  onChange={handleChange}
                />
                <input
                  autoComplete="off"
                  className="input-news"
                  id="mensaje"
                  type="text"
                  name="message"
                  placeholder="Mesaje"
                  value={toSend.message}
                  onChange={handleChange}
                />
                <button type="submit" id="btn-contact">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
