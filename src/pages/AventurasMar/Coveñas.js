import React from "react";
import "./SanAndres.css";
import { ImagenesCoveñas } from "../../components/ImagenesBloque";
import { CardPromoCoveñas } from "../../components/Cardpromo";
import Footer from "../../components/Footer";
import Coveñasv from "../../imagenes/Coveñas.gif";
import Navbar from "../../components/navbar";
function Coveñas() {
  return (
    <div>
      <Navbar />
      <img src={Coveñasv} type="video/mp4" className="Videos" />
      <img src="" type="video/mp4" className="VideosMar" />
      <div className="container-tittle-global-mar">
        <h5 className="text-global-mar">Coveñas</h5>
        <h5 className="subtitle-global-mar">
          con natufan,mas cerca de tu destino
        </h5>
      </div>
      <ImagenesCoveñas />
      <h3 className="title">Promociones</h3>
      <h4 className="subtitle">
        No dejes pasar esta oportunidad y vive tu aventura a un mejor precio
      </h4>

      <div className="espacio-entre-cartagena"></div>
      <Footer />
    </div>
  );
}

export default Coveñas;
