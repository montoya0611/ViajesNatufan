import React from "react";
import "./SanAndres.css";
import { ImagenesMiami } from "../../components/ImagenesBloque";
import { CardPromoCartagena } from "../../components/Cardpromo";
import Footer from "../../components/Footer";
import Miamiv from "../../imagenes/Miami.gif";
import Navbar from "../../components/navbar";
function Miami() {
  return (
    <div>
      <Navbar />
      <img src={Miamiv} type="video/mp4" className="Videos" />
      <img src="" type="video/mp4" className="VideosMar" />
      <div className="container-tittle-global-mar">
        <h5 className="text-global-mar">Miami</h5>
        <h5 className="subtitle-global-mar">
          con natufan,mas cerca de tu destino
        </h5>
      </div>
      <ImagenesMiami />
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

export default Miami;
