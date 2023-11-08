import React from "react";
import "./Travel.css";
import "./TravelPlace.css";
import { CardpromoTravelPlace } from "../components/Cardpromo";
import Footer from "../components/Footer";
import {
  CardNacionalesMaravillas,
  CardInternacionalesMaravillas,
} from "../components/Cardlugares";

export default function TravelPlace() {
  return (
    <div className="container-travel">
      <img
        className="photo-place"
        src="https://ingeoexpert.com/wp-content/uploads/2022/03/Las-7-maravillas-del-mundo-%C2%BFCua%CC%81les-son-y-do%CC%81nde-esta%CC%81n_-2-1.webp"
        alt="fotoinicio"
      />
      <h5 className="text-photo-place">
        BIENVENIDOS A LAS MARAVILLAS DEL MUNDO
      </h5>
      <hr className="linea-top" />
      <h3 className="title-travel">DESTINOS NACIONALES</h3>
      <hr className="linea-bottom" />
      <h4 className="subtitle-travel">
        Ya conoces las aventuras de Colombia y toda la diversidad que tenemos
        para que disfrutes.
      </h4>

      <CardNacionalesMaravillas />
      <hr className="linea-top" />
      <h3 className="title-travel">DESTINOS INTERNACIONALES</h3>
      <hr className="linea-bottom" />
      <h4 className="subtitle-travel">
        El mundo es muy grande para que lo sigas viendo por una pantalla, es
        hora de viajar y estos son los lugares magicos que tenemos para ti.
      </h4>
      <CardInternacionalesMaravillas />
      <h3 className="title">Promociones</h3>
      <h4 className="subtitle">
        No dejes pasar esta oportunidad y vive tu aventura a un mejor precio
      </h4>

      <CardpromoTravelPlace />

      <Footer />
    </div>
  );
}
