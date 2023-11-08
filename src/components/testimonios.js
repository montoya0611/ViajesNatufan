
import React, { Component } from "react";
import Slider from "react-slick";
import "./testimonio.css"

export default class Testimonio extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2>Testimonio</h2>
        <Slider {...settings}>
<div>
<div className="container-card-testimonio">
          <div className="container-imagen-testimonio">
          <img   className="photo-person"src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg"/>
          <div className="container-elementos-testimonios">
          <h5 className="text-cliente">Cliente satisfecho </h5>
          <h5 className="text-nombre-cliente">Andres Aguirre Nariño </h5>
            <h3 className="text-testimonio">Mi viaje a Nueva York fue asombroso. Disfruté de las luces de Times Square, recorrí Central Park y subí al Empire State Building para tener una vista panorámica inolvidable. </h3>
            </div>
          </div>
          </div>
</div>

<div>
<div className="container-card-testimonio">
          <div className="container-imagen-testimonio">
          <img   className="photo-person"src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg"/>
          <div className="container-elementos-testimonios">
          <h5 className="text-cliente">Cliente satisfecho </h5>
          <h5 className="text-nombre-cliente">Andres Aguirre Nariño </h5>
            <h3 className="text-testimonio">Mi viaje a Nueva York fue asombroso. Disfruté de las luces de Times Square, recorrí Central Park y subí al Empire State Building para tener una vista panorámica inolvidable. </h3>
            </div>
          </div>
          </div>
</div>

<div>
<div className="container-card-testimonio">
          <div className="container-imagen-testimonio">
          <img   className="photo-person"src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg"/>
          <div className="container-elementos-testimonios">
          <h5 className="text-cliente">Cliente satisfecho </h5>
          <h5 className="text-nombre-cliente">Andres Aguirre Nariño </h5>
            <h3 className="text-testimonio">Mi viaje a Nueva York fue asombroso. Disfruté de las luces de Times Square, recorrí Central Park y subí al Empire State Building para tener una vista panorámica inolvidable. </h3>
            </div>
          </div>
          </div>
</div>
        

        </Slider>
      </div>
    );
  }
}

