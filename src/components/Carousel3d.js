import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import "./Carousel3d.css"

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  };

  slides = [
    {
      key: 1,
      content: <img src="https://picsum.photos/800/801/?random" alt="1" />
    },
    {
      key: 2,
      content: <img src="https://picsum.photos/800/802/?random" alt="2" />
    },
    {
      key: 3,
      content: <img src="https://picsum.photos/600/803/?random" alt="3" />
    },
    {
      key: 4,
      content: <img src="https://picsum.photos/800/500/?random" alt="4" />
    },
    {
      key: 5,
      content: <img src="https://picsum.photos/800/804/?random" alt="5" />
    },
    {
      key: 6,
      content: <img src="https://picsum.photos/500/800/?random" alt="6" />
    },
    {
      key: 7,
      content: <img src="https://picsum.photos/800/600/?random" alt="7" />
    },
    {
      key: 8,
      content: <img src="https://picsum.photos/805/800/?random" alt="8" />
    }
  ];

  render() {
    return (
      <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          animationConfig={this.state.config}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "flex",
            justifyContent: "space-around",

          }}
        >
          <div >
            <button className="button-carousel"
              onClick={() => {
                this.setState({ goToSlide: this.state.goToSlide - 1 });
              }}
            >
              Atras
            </button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button className="button-carousel"
              onClick={() => {
                this.setState({ goToSlide: this.state.goToSlide + 1 });
              }}
            >
              siguiente
            </button>
          </div>
        </div>
      </div>
    );
  }
}
