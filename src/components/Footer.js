import React from "react";
import "./Footer.css";
import avion from "../imagenes/avion.png";
import mundo from "../imagenes/mundo.png";
import asesor from "../imagenes/asesor.png";
import facebook from "../imagenes/facebook.svg";
import tiktok from "../imagenes/tiktok.svg";
import instagram from "../imagenes/instagram.svg";
import twitter from "../imagenes/twitter.svg";
import { Link } from "gatsby";

function Footer() {
  return (
    <>
      <div className="container-footer">
        <div className="container-photo">
          <h3 className="tittle-footer">POR QUE VIAJAR CON NOSOTROS</h3>
          <h4 className="subtittle-footer">Tus sueños te hace realidad</h4>
          <div className="container-contenido">
            <div className="container-uno">
              <img className="icono-uno" src={avion} alt="fotoinicio" />
              <h7 className="texto-uno">
                mas de 25 años viajando por el mundo
              </h7>
            </div>

            <div className="container-uno">
              <img className="icono-uno" src={mundo} alt="fotoinicio" />
              <h7 className="texto-uno">
                Más de 800 experiencias tenemos para ti
              </h7>
            </div>

            <div className="container-uno">
              <img className="icono-uno" src={asesor} alt="fotoinicio" />
              <h7 className="texto-uno">
                Te brindamos la mejor experiencia y servicio
              </h7>
            </div>
          </div>
        </div>
        <div className="footer">
          <ul className="parte-uno">
            <h5 className="tittle-uno">Hablar con nosotros</h5>

            <div className="contenido-footer">
              <li>302 343 1557</li>
              <li>444 65 22</li>
              <li>Info@viajesnatufan.com</li>
            </div>
          </ul>
          <ul className="parte-dos">
            <h5 className="tittle-uno">¿Quienes Somos?</h5>
            <div className="contenido-footer">
              <li>Mision</li>
              <li>Vision</li>
              <li>terminos y condiciones</li>
            </div>
          </ul>
          <ul className="parte-tres">
            <h5 className="tittle-uno">Conocer más</h5>
            <div className="contenido-footer">
              <li>Aventuras en la playa</li>
              <li>Lugares Inolvidables</li>
              <li>Excursiones Natufan</li>
            </div>
          </ul>
          <ul className="parte-cuatro">
            <h5 className="tittle-uno">Donde estamos ubicados</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.15121257097!2d-75.57175819999999!3d6.243794200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429e664eedecd%3A0x5546869939d516ac!2sViajes%20Natufan!5e0!3m2!1ses-419!2sco!4v1698944780246!5m2!1ses-419!2sco"
              className="mapa"
            ></iframe>
          </ul>
        </div>
      </div>

      <div className="container-iconos-footer">
        <hr className="linea-footer" />
        <a
          href="https://www.facebook.com/ViajesNatufan/?locale=es_LA"
          target="_blank"
        >
          <img src={facebook} className="icono" alt="" />
        </a>
        <a
          href="https://www.instagram.com/viajesnatufan/?hl=es"
          target="_blank"
        >
          <img src={instagram} className="icono" alt="Facebook" />
        </a>
        <a href="https://www.tiktok.com/@viajesnatufansas" target="_blank">
          <img src={tiktok} className="icono" alt="" />
        </a>
        <a href="https://twitter.com/ViajeNatufan" target="_blank">
          <img src={twitter} className="icono" alt="" />
        </a>
        <hr className="linea-footer" />
      </div>
      <p className="year">Since 2001</p>
      <Link
        className="rnt"
        to="https://drive.google.com/file/d/1qUHuJwAR6DFJizttlBjpOxWGwjFC0vAL/view"
      >
        RNT. No. 58432
      </Link>
    </>
  );
}

export default Footer;
