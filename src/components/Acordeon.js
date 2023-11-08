import React from "react";
import "./Acordeon.css";
import arrow from "../imagenes/arrow.svg";

const bloque = document.querySelectorAll(".bloque");
const h11 = document.querySelectorAll(".maicol");

h11.forEach((cadaH11, i) => {
  h11[i].addEventListener("click", () => {
    bloque.forEach((cadaBloque, i) => {
      bloque[i].classList.remove("activo");
    });
    bloque[i].classList.add("activo");
  });
});

function Acordeon() {
  return (
    <div className="acordeon">
      <div className="bloque">
        <div className="maicol">
          <h11 className="texto">precios y pagos </h11>
          <img className="icono-desplegar" src={arrow} alt="" />
        </div>
        <p className="contenido"> soy el contenido</p>
      </div>

      <div className="bloque">
        <div className="maicol">
          <h11 className="texto">servicios incluidos </h11>
          <img className="icono-desplegar" src={arrow} alt="" />
        </div>
        <p className="contenido"> soy el contenido</p>
      </div>

      <div className="bloque">
        <div className="maicol">
          <h11 className="texto">derechos y oblicación del operador</h11>
          <img className="icono-desplegar" src={arrow} alt="" />
        </div>
        <p className="contenido"> soy el contenido</p>
      </div>

      <div className="bloque">
        <div className="maicol">
          <h11 className="texto">Documentación, pasaporte y visados</h11>
          <img className="icono-desplegar" src={arrow} alt="" />
        </div>
        <p className="contenido"> soy el contenido</p>
      </div>

      <div className="bloque">
        <div className="maicol">
          <h11 className="texto">Cancelaciones, y reembolsos</h11>
          <img className="icono-desplegar" src={arrow} alt="" />
        </div>
        <p className="contenido"> soy el contenido</p>
      </div>

      <div className="bloque">
        <div className="maicol">
          <h11 className="texto">Ley de retracto y desistimiento</h11>
          <img className="icono-desplegar" src={arrow} alt="" />
        </div>
        <p className="contenido"> soy el contenido</p>
      </div>

      <div className="bloque">
        <div className="maicol">
          <h11 className="texto">Equipaje y efectos personales</h11>
          <img className="icono-desplegar" src={arrow} alt="" />
        </div>
        <p className="contenido"> soy el contenido</p>
      </div>

      <div className="bloque">
        <div className="maicol">
          <h11 className="texto">Protocolo</h11>
          <img className="icono-desplegar" src={arrow} alt="" />
        </div>
        <p className="contenido"> soy el contenido</p>
      </div>

      <div className="bloque">
        <div className="maicol">
          <h11 className="texto">Sostenibilidad natufan</h11>
          <img className="icono-desplegar" src={arrow} alt="" />
        </div>
        <p className="contenido"> soy el contenido</p>
      </div>
    </div>
  );
}

export default Acordeon;
