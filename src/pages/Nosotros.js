import React from "react";
import Acordeon from "../components/Acordeon";
import "./nosotros.css";

function Nosotros() {
  return (
    <div>
      <hr className="linea-top" />
      <h3 className="title">Aprende de nosotros</h3>
      <hr className="linea-bottom" />
      <Acordeon />
    </div>
  );
}

export default Nosotros;
