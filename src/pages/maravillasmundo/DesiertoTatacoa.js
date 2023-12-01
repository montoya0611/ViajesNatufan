import React from "react";
import "./Amazonas.css";
import { PlanesDesierto } from "../../components/Planes";
import Footer from "../../components/Footer";
import { CardPromoCartagena } from "../../components/Cardpromo";
import Navbar from "../../components/navbar";

function DesiertoTatacoa() {
  return (
    <div>
      <div className="container-amazonas">
        <Navbar />
        <div className="container-tittle-global">
          <h5 className="text-global">Desierto Tatacoa</h5>
          <h5 className="subtitle-global">
            con natufan,mas cerca de tu destino
          </h5>
        </div>
        <PlanesDesierto />
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
    </div>
  );
}

export default DesiertoTatacoa;
