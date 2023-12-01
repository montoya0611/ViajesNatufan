import * as React from "react";
import "./index.css";
import { Cardstartcon } from "../components/Cardstart";
import { CardpromoStart } from "../components/Cardpromo";
import Example from "../components/Carousel3d";
import { Link } from "gatsby";
import Documentacion from "../components/Carddocument";
import Footer from "../components/Footer";
import Carousellogo from "../components/carousellogo";
import Carousel from "../components/Carousel";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <hr className="linea-top" />
      <div className="container-titulo">
        <h3 className="title">ESTAS AVENTURAS ESPERAN POR TI</h3>
        <h4 className="subtitle">
          Disfruta de todas estas maravillas al lado de FamiliaNatufan
        </h4>
      </div>
      <hr className="linea-bottom" />

      <Cardstartcon />

      <div className="container-global-promo">
        <hr className="linea-top" />
        <h3 className="title">Promociones</h3>
        <h4 className="subtitle">
          No dejes pasar esta oportunidad y vive tu aventura a un mejor precio
        </h4>
        <hr className="linea-bottom" />
        <CardpromoStart />
      </div>

      <h3 className="title">EXPERIENCIAS NATUFAN</h3>
      <h4 className="subtitle">
        Mira un poco de los recuerdos que nos dejaron nuestras aventuras. No
        dejes pasar mas el tiempo y ven con la familiaNatufan a vivir tus
        propias experiencias.
      </h4>
      <div className="container-carousel3d">
        <Example />
      </div>

      <div className="container-global-promo">
        <hr className="linea-top" />
        <h3 className="title">Te ayudamos a sacar tu visa</h3>
        <h4 className="subtitle">preguntanos para mas información</h4>
        <hr className="linea-bottom" />
        <Documentacion />
      </div>

      <div className="container-logos">
        <Carousellogo />
      </div>
      <Footer />
    </>
  );
}
