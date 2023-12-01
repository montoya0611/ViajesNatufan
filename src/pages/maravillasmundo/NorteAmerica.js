import React from "react";
import "./Amazonas.css";
import { PlanesNorteAmerica } from "../../components/Planes";
import Footer from "../../components/Footer";
import { CardPromoCartagena } from "../../components/Cardpromo";
import NorteAmericav from "../../imagenes/NorteAmerica.gif";
import Navbar from "../../components/navbar";
function NorteAmerica() {
  return (
    <div className="container-amazonas">
      <Navbar />
      <img src={NorteAmericav} type="video/mp4" className="Videos" />
      <div className="container-tittle-global">
        <h5 className="text-global">Norte America</h5>
        <h5 className="subtitle-global">con natufan,mas cerca de tu destino</h5>
      </div>
      <PlanesNorteAmerica />
      <div className="container-global-promo-global">
        <h3 className="title-global-promociones">Promociones</h3>
        <h4 className="subtitle-global-promociones">
          No dejes pasar esta oportunidad y vive tu aventura a un mejor precio
        </h4>

        <div className="espacio-entre-amazonas">
          <CardPromoCartagena />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NorteAmerica;
