import React from "react";
import "./Cardstart.css";
import {Link} from "gatsby"

function Cardstart({ title, subtitle }) {
  return (
    <div className="container-card">
    <div className="container-start-contenido">
    <h1 className="titulo-card-start">{title}</h1>
    <h2 className="product-info-start">{subtitle}</h2>
    </div>
    </div>
  );
}

  export function Cardstartcon() {
  return (
    <div className="container-card-start">
       <Link className="Button-vamos-start" to="./"></Link>
      <Cardstart
        title="LAS AVENTURAS AL LADO DEL MAR"
        subtitle="Disfruta del sol  y el mar  con los mejores planes."
      />
      <Cardstart
        title="LUGARES INOLVIDABLES"
        subtitle="Conoce el mundo y sus lugares magicos."
      />
      <Cardstart
        title="EXCURSIONES AL ESTILO NATUFAN"
        subtitle="Vive de un tour a un estilo completamente
 diferente."
      />
    </div>
  );
}
