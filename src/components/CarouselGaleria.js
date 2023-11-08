import React, { Component } from "react";
import Slider from "react-slick";
import "./CarouselGaleria.css"

export class Galeria extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div>
        <h4 className="Carousel-tittle">Excursion Mexico</h4>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
            <div className="photo-grande">
            <img src="https://i.pinimg.com/564x/04/09/ad/0409ad7fa3cf2b812c48f600cba3e7b3.jpg" />
          </div>
          <div className="photo-grande">
            <img src="https://viajesnatufan.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-06-at-2.47.44-PM-e1688675628379-150x150.jpeg" />
          </div>
          <div className="photo-grande">
            <img src="https://viajesnatufan.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-06-at-2.47.45-PM-1-e1688675718115-150x150.jpeg" />
          </div>
          <div className="photo-grande">
            <img src="https://viajesnatufan.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-06-at-2.47.46-PM-e1688675669274-150x150.jpeg" />
          </div>
          <div className="photo-grande">
            <img src="https://viajesnatufan.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-06-at-2.41.30-PM-1-e1688676479476-150x150.jpeg" />
          </div>
          <div className="photo-grande">
            <img src="https://viajesnatufan.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-06-at-2.47.47-PM-1-e1688675691358-150x150.jpeg" />
          </div>

         
        </Slider>

        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={6}
          swipeToSlide={true}
          focusOnSelect={true}
        >
            <div className="photo-small">
            <img src="https://viajesnatufan.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-06-at-2.47.43-PM-e1688675708861-150x150.jpeg" />
          </div>
          <div className="photo-small">
            <img src="https://viajesnatufan.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-06-at-2.47.44-PM-e1688675628379-150x150.jpeg" />
          </div>
          <div className="photo-small">
            <img src="https://viajesnatufan.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-06-at-2.47.45-PM-1-e1688675718115-150x150.jpeg" />
          </div>
          <div className="photo-small">
            <img src="https://viajesnatufan.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-06-at-2.47.46-PM-e1688675669274-150x150.jpeg" />
          </div>
          <div className="photo-small">
            <img src="https://viajesnatufan.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-06-at-2.41.30-PM-1-e1688676479476-150x150.jpeg" />
          </div>
          <div className="photo-small">
            <img src="https://viajesnatufan.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-06-at-2.47.47-PM-1-e1688675691358-150x150.jpeg" />
          </div>

             
          
        </Slider>
      </div>
    );
  }
}

export  class GaleriaDos extends Component {
    constructor(props) {
      super(props);
      this.state = {
        nav1: null,
        nav2: null
      };
    }
  
    componentDidMount() {
      this.setState({
        nav1: this.slider1,
        nav2: this.slider2
      });
    }
  
    render() {
      return (
        <div>
          <h4 className="Carousel-tittle">Excursion Estados Unidos</h4>
          <Slider
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
          >
              <div className="photo-grande">
              <img src="https://i.pinimg.com/564x/04/09/ad/0409ad7fa3cf2b812c48f600cba3e7b3.jpg" />
            </div>
            <div className="photo-grande">
              <img src="https://viajesnatufan.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-06-at-2.47.44-PM-e1688675628379-150x150.jpeg" />
            </div>
            <div className="photo-grande">
              <img src="https://viajesnatufan.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-06-at-2.47.45-PM-1-e1688675718115-150x150.jpeg" />
            </div>
            <div className="photo-grande">
              <img src="https://viajesnatufan.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-06-at-2.47.46-PM-e1688675669274-150x150.jpeg" />
            </div>
            <div className="photo-grande">
              <img src="https://viajesnatufan.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-06-at-2.41.30-PM-1-e1688676479476-150x150.jpeg" />
            </div>
            <div className="photo-grande">
              <img src="https://viajesnatufan.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-06-at-2.47.47-PM-1-e1688675691358-150x150.jpeg" />
            </div>
  
           
          </Slider>
  
          <Slider
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={6}
            swipeToSlide={true}
            focusOnSelect={true}
          >
              <div className="photo-small">
              <img src="https://viajesnatufan.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-06-at-2.47.43-PM-e1688675708861-150x150.jpeg" />
            </div>
            <div className="photo-small">
              <img src="https://viajesnatufan.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-06-at-2.47.44-PM-e1688675628379-150x150.jpeg" />
            </div>
            <div className="photo-small">
              <img src="https://viajesnatufan.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-06-at-2.47.45-PM-1-e1688675718115-150x150.jpeg" />
            </div>
            <div className="photo-small">
              <img src="https://viajesnatufan.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-06-at-2.47.46-PM-e1688675669274-150x150.jpeg" />
            </div>
            <div className="photo-small">
              <img src="https://viajesnatufan.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-06-at-2.41.30-PM-1-e1688676479476-150x150.jpeg" />
            </div>
            <div className="photo-small">
              <img src="https://viajesnatufan.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-06-at-2.47.47-PM-1-e1688675691358-150x150.jpeg" />
            </div>
  
               
            
          </Slider>
        </div>
      );
    }
  }
  

