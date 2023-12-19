import React from "react";
import "./Cardstart.css";
import { Link } from "gatsby";

function Cardstart({ title, subtitle, to }) {
  return (
    <Link to={to} className="container-card-inicio">
      <div className="container-start-contenido">
        <h1 className="titulo-card-start">{title}</h1>
        <h2 className="product-info-start">{subtitle}</h2>
      </div>
    </Link>
  );
}

export function Cardstartcon() {
  return (
    <div className="container-card-principal">
      <Cardstart
        to="/AventurasMar"
        title="LAS AVENTURAS AL LADO DEL MAR"
        subtitle="Disfruta del sol  y el mar  con los mejores planes."
      />
      <Cardstart
        to="/MaravillasMundo"
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
