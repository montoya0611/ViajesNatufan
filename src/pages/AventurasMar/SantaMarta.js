import React from "react";
import "./SanAndres.css";
import { ImagenesSantaMarta } from "../../components/ImagenesBloque";
import { CardPromoCartagena } from "../../components/Cardpromo";
import Footer from "../../components/Footer";
import SantaMartav from "../../imagenes/SantaMarta.gif";
import Navbar from "../../components/navbar";

function SantaMarta() {
  return (
    <div>
      <Navbar />
      <img src={SantaMartav} type="video/mp4" className="Videos" />
      <img src="" type="video/mp4" className="VideosMar" />
      <div className="container-tittle-global-mar">
        <h5 className="text-global-mar">San Andres</h5>
        <h5 className="subtitle-global-mar">
          con natufan,mas cerca de tu destino
        </h5>
      </div>
      <ImagenesSantaMarta />
      <h3 className="title">Promociones</h3>
      <h4 className="subtitle">
        No dejes pasar esta oportunidad y vive tu aventura a un mejor precio
      </h4>

      <div className="espacio-entre-cartagena">
        <CardPromoCartagena />
      </div>
      <Footer />
    </div>
  );
}

export default SantaMarta;
