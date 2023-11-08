import React from "react";
import "./Amazonas.css";
import { PlanesAfrica } from "../../components/Planes";
import Footer from "../../components/Footer";
import { CardPromoCartagena } from "../../components/Cardpromo";
import Amazonasvv from "../../imagenes/Amazonasvv.gif";
function Africa() {
  return (
    <div className="container-amazonas">
      <img src={Amazonasvv} type="video/mp4" className="Videos" />
      <div className="container-tittle-global">
        <h5 className="text-global">Africa</h5>
        <h5 className="subtitle-global">con natufan,mas cerca de tu destino</h5>
      </div>
      <PlanesAfrica />
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

export default Africa;
