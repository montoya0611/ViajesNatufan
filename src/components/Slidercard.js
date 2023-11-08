
 import React from 'react';
 import {Draggable} from "./Draggable"
 import "./Slidercard.css"

 function TarjetasLugar({destino}){
    return(
      <div className='container-lugar'
        style={{backgroundImage: `url("https://media.istockphoto.com/id/155439315/es/foto/avi%C3%B3n-de-pasajeros-volando-sobre-nubes-durante-la-puesta-del-sol.jpg?b=1&s=612x612&w=0&k=20&c=8FOtqvcauYpJ5eQmP_Ta5GGTSH4-KkYzq28GhhFvDYw=")`,   backgroundSize: "cover", }} >
      <h5 className='destino'>{destino} </h5>
      </div>
      );
    }
 
    export function ExcursionMexico() {
   return (
        <Draggable>
  <div className="cuerpo-lugar">
            <TarjetasLugar destino="Cartagena"/>
            <TarjetasLugar destino="Santa Marta"/>
            <TarjetasLugar destino="coveñas"/>
            <TarjetasLugar destino="Guajira"/>
            <TarjetasLugar destino="coveñas"/>
            <TarjetasLugar destino="Cartagena"/>
            <TarjetasLugar destino="Santa Marta"/>
            <TarjetasLugar destino="coveñas"/>
            <TarjetasLugar destino="Cartagena"/>
            <TarjetasLugar destino="Santa Marta"/>
            <TarjetasLugar destino="coveñas"/>
            <TarjetasLugar destino="Guajira"/>
            <TarjetasLugar destino="coveñas"/>
  </div>
        </Draggable>
   )
 }

 export  function SlidercardMarInternacionales() {
  return (
       <Draggable>
 <div className="cuerpo-lugar">
           <TarjetasLugar destino="Brasil"/>
           <TarjetasLugar destino="Cancun"/>
           <TarjetasLugar destino="Punta Cana"/>
           <TarjetasLugar destino="Francia"/>
           <TarjetasLugar destino="Holanda"/>
           <TarjetasLugar destino="Japon"/>
           <TarjetasLugar destino="Argentina"/>
           <TarjetasLugar destino="Venecia"/>
 </div>
       </Draggable>
  )
}
