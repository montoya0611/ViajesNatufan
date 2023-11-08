import React from "react";
import "./Carddocument.css";
import {Link} from "gatsby"

    function Carddocument({ title, subtitle }) {
      return (
        <div className="container-card">
        <div className="container-documentos-contenido">
        <h1 className="titulo-card-documentos">{title}</h1>
        <h2 className="product-info-documentos">{subtitle}</h2>
        </div>
        </div>
      );
    }

 function Documentacion() {
  return (
    <div className="container-card-start">
       <Link className="Button-vamos-start" to="./"></Link>
      <Carddocument
        title="Visas" 
        subtitle=" Sacarla  y Renovación "
      />
    </div>
  );
}
export default Documentacion;
