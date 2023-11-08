import React from "react";
import "./Travel.css";
import { CardpromoTravel } from "../components/Cardpromo";
import { CardNacionalesMar } from "../components/Cardlugares";
import Footer from "../components/Footer";
import VideoAventurasMar from "../imagenes/aventurasmar.gif";

export default function Travel() {
  return (
    <div className="container-travel">
      <img
        className="video-aventurasmar"
        src={VideoAventurasMar}
        alt="fotoinicio"
      />
      <h5 className="text-photo">Bienvenidos aventuras al lado del mar</h5>

      <hr className="linea-top" />
      <h3 className="title-travel">DESTINOS PLAYAS</h3>
      <hr className="linea-bottom" />
      <h4 className="subtitle-travel">
        Mira todas las maravillosos lugares al lado del mar que tenemos para ti.
      </h4>
      <CardNacionalesMar />

      <h3 className="title">Promociones</h3>
      <h4 className="subtitle">
        No dejes pasar esta oportunidad y vive tu aventura a un mejor precio
      </h4>
      <CardpromoTravel />
      <Footer />
    </div>
  );
}
