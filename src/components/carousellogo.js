
import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousellogo.css"
class Carousellogo extends Component{
  render(){
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return(
      <div className="mainContainer">
        <h2 className="tittle-carousel"> PREGUNTA TAMBIÉN POR</h2>
        <Slider {...settings}>
          <div className="container">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_689,h_609/https://figuro.la/wp-content/uploads/2023/08/assist-viaje-seguro-de-viaje.png" />
          </div>
          <div className="container">
            <img src="https://exalumnos.uexternado.edu.co/wp-content/uploads/sites/3/2016/02/Logo-ASSIST-CARD-a%C3%B1o-2020.png" />
          </div>
          <div className="container">
            <img src="https://www.grupomok.com/Content/images/logo_grupo_mok-300x232.png" />
          </div>
          <div className="container">
            <img src="https://1000marcas.net/wp-content/uploads/2020/11/Hertz-Logo.png" />
          </div>
          <div className="container">
            <img src="https://cdn.cookielaw.org/logos/3049dc52-d1d0-4f29-98a6-716dc298f06f/8fd30002-7d4c-4e6d-b5ee-7c58ffd04b13/d7704f98-fd23-4c1b-a3fd-f47307e59e14/MicrosoftTeams-image_(15).png" />
          </div>
          <div className="container">
            <img src="https://seeklogo.com/images/D/Dollar_Rent_A_Car-logo-D62CCF0E08-seeklogo.com.png" />
          </div>
          <div className="container">
            <img src="https://e7.pngegg.com/pngimages/196/251/png-clipart-universal-studios-florida-universal-studios-hollywood-universal-s-logo-universal-parks-resorts-hamburger-poster-logo-world.png" />
          </div>
          <div className="container">
            <img src="https://www.desertpalmshotel.com/resourcefiles/blogsmallimages/ticket.jpg" />
          </div>
          <div className="container">
            <img src="http://viajesnatufan.com/wp-content/uploads/2019/10/SeaWorld-busch-gardens-Tickets-150x109.png" />
          </div>
          <div className="container">
            <img src="https://www.camaramedellin.com.co/portals/0/Afiliados/logos_feria/Logos%20Feria-33.png?ver=2020-09-04-103231-087" />
          </div>
          <div className="container">
            <img src="https://www.giraturtravel.com/wp-content/uploads/2016/04/LOGO-GIRATUR-2020.png" />
          </div>
          <div className="container">
            <img src="https://cdn.shortpixel.ai/spai/w_781+q_glossy+ret_img+to_webp/https://planesturisticos.com/c/u/elementor/thumbs/EUROPAMUNDO-LOGO-compressor-obqk54pe9kbdwlry5d5h6jpv1za0fxt7wfx5fzkt8g.png" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousellogo;
