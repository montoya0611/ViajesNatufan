import React, { Component } from "react";
import Slider from "react-slick";
import "./Carousel.css"

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="mainContainer-principal">
        <Slider {...settings}>
        <div className="container-principal">
            <img src="https://cdn.pixabay.com/photo/2020/06/14/22/46/the-caucasus-5299607_1280.jpg" />
          </div>
          <div className="container-principal">
            <img src="https://cdn.pixabay.com/photo/2015/01/28/23/10/mosque-615415_1280.jpg" />
          </div>
          <div className="container-principal">
            <img src="https://cdn.pixabay.com/photo/2015/01/28/23/10/mosque-615415_1280.jpg" />
          </div>
          <div className="container-principal">
            <img src="https://cdn.pixabay.com/photo/2015/01/28/23/10/mosque-615415_1280.jpg" />
          </div>
          <div>
        </div>
        </Slider>
      </div>
    );
  }
}