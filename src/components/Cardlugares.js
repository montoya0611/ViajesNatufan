import React from "react";
import { Link } from "gatsby";
import "./Cardlugares.css";
import Africa from "../imagenes/Africa.jpg";
import Europa from "../imagenes/Europa.jpg";
import NorteAmerica from "../imagenes/NorteAmerica.jpg";
import Oceania from "../imagenes/Oceania.jpg";
import Asia from "../imagenes/Asia.jpg";
import SurAmerica from "../imagenes/SurAmerica.jpg";
import MedioOriente from "../imagenes/MedioOriente.jpg";
import CentroAmerica from "../imagenes/CentroAmerica.png";

function Lugar({ name, imagen, linklugares }) {
  return (
    <div className="container-card-lugar">
      <h1 className="title-card-lugar">{name} </h1>
      <img className="photo-card-lugares" src={imagen} alt="" />
      <Link className="button-planes" to={linklugares}>
        Planes
      </Link>
    </div>
  );
}

export function CardNacionalesMar() {
  const lugaresNacionales = [
    {
      name: "San Andres",
      linklugares: "/AventurasMar/SanAndres/",
      imagen:
        "https://images.unsplash.com/photo-1576475510454-b0af18970e6d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Cartagena",
      linklugares: "/AventurasMar/Cartagena/",
      imagen:
        "https://www.eltiempo.com/files/article_main_1200/uploads/2022/11/19/6378fa270d177.jpeg",
    },
    {
      name: "Santa Marta",
      linklugares: "/AventurasMar/SantaMarta/",
      imagen:
        "https://www.labitacoradecarlosyeli.com/wp-content/uploads/2021/07/2-playas-imperdibles-si-estas-en-Santa-Marta-Colombia-Cabezote-1.jpg",
    },
    {
      name: "Coveñas",
      linklugares: "/AventurasMar/Coveñas/",
      imagen:
        "https://elgolfodemorrosquillo.com/wp-content/uploads/2020/02/como-llegar-a-covenas.jpg",
    },
    {
      name: "Capurgana",
      linklugares: "/AventurasMar/Capurgana/",
      imagen:
        "https://static.wixstatic.com/media/e367fb_31d0a8af63ae4fd99a9cb44517e51ea1~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e367fb_31d0a8af63ae4fd99a9cb44517e51ea1~mv2.jpg",
    },
    {
      name: "Punta Cana",
      linklugares: "/AventurasMar/PuntaCana/",
      imagen:
        "https://res.cloudinary.com/lastminute-contenthub/s--CvRwMKzT--/c_crop,h_3840,w_5760,x_0,y_0/c_limit,h_999999,w_1024/f_auto/q_auto:eco/v1/DAM/Photos/Destinations/Americas/Dominican%20Republic/shutterstock_270486656",
    },
    {
      name: "Cuba",
      linklugares: "/AventurasMar/Cuba/",
      imagen:
        "https://cloudinary.fclmedia.com/fctg/image/fetch/h_660,w_1200,q_100,c_fill,g_auto,fl_progressive/https://content.flightcentre.com/sites/default/files/ca//blog/wp-content/uploads/2020/03fc-blog-header-1200x675-best-beaches-cuba.jpg",
    },
    {
      name: "Miami",
      linklugares: "/AventurasMar/Miami/",
      imagen:
        "https://www.barnes-miami.com/wp-content/uploads/2021/03/MG_6_1_Miami.jpg",
    },
    {
      name: "Aruba",
      linklugares: "/AventurasMar/Aruba/",
      imagen:
        "https://media-cdn.tripadvisor.com/media/photo-s/29/0b/3d/76/cabanas-aerial.jpg",
    },
    {
      name: "Cancún",
      linklugares: "/AventurasMar/Cancun/",
      imagen:
        "https://image-tc.galaxy.tf/wijpeg-nwgc95w5lyjukds31ydn66g1/cancu-n_wide.jpg?crop=0%2C0%2C1920%2C1080&width=2500",
    },
    {
      name: "Curazao",
      linklugares: "/AventurasMar/Curazao/",
      imagen:
        "https://www.revistaequipar.com/admin/img/noticias/2846.20230220103509.jpg",
    },
  ];
  return (
    <div className="container-card-lugares">
      {lugaresNacionales.map((lugar, index) => (
        <Lugar
          name={lugar.name}
          imagen={lugar.imagen}
          linklugares={lugar.linklugares}
        />
      ))}
    </div>
  );
}

export function CardNacionalesMaravillas() {
  const maravillasNacionales = [
    {
      name: "Guajira",
      imagen:
        "https://media.istockphoto.com/id/1328762640/es/foto/vista-a%C3%A9rea-de-playa-de-la-guajira-colombia.jpg?s=612x612&w=0&k=20&c=DYciFNeOpl5J1SVITHJgymEEVlnmb4GkBiE44mRO0XA=",
      linklugares: "/maravillasmundo/Guajira/",
    },
    {
      name: "Amazonas",
      linklugares: "/maravillasmundo/Amazonas/",
      imagen:
        "https://images.unsplash.com/photo-1580630873708-e0475b1856c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXx2a1hsWlQ1SjM2a3x8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Desierto Tatacoa ",
      imagen: "https://www.otbcali.com/wp-content/uploads/2019/10/huila3.png",
      linklugares: "/maravillasmundo/DesiertoTatacoa/",
    },
    {
      name: "Tolima",
      linklugares: "/maravillasmundo/Tolima/",
      imagen:
        "https://www.eltiempo.com/files/article_main_1200/files/crop/uploads/2020/10/29/5f9b05fe12a7a.r_1688139550051.0-417-1772-1481.jpeg",
    },
    {
      name: "Llanos Orientales",
      linklugares: "/maravillasmundo/LlanosOrientales/",
      imagen:
        "https://caracoltv.brightspotcdn.com/dims4/default/60f55a0/2147483647/strip/true/crop/2120x1413+0+0/resize/1000x667!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2F69%2F69%2F8e07f3af4d8e9041f7f3203d48e2%2Fgettyimages-659934294.jpg",
    },
    {
      name: "Santander",
      linklugares: "/maravillasmundo/Santander/",
      imagen:
        "https://parquesdesantander.com/wp-content/uploads/2021/09/panachi-plano-general.png",
    },
    {
      name: "Boyaca",
      linklugares: "/maravillasmundo/Boyaca/",
      imagen:
        "https://images.pexels.com/photos/17413258/pexels-photo-17413258/free-photo-of-nieve-madera-amanecer-paisaje.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Eje Cafetero",
      linklugares: "/maravillasmundo/EjeCafetero/",
      imagen:
        "https://fincaspanacah10.com/wp-content/uploads/slider/cache/2a89ca791bf0b1f954bae58ea242ea3f/VALLE-TOURIST-PAGE.jpg",
    },
    {
      name: "Caño Cristales",
      linklugares: "/maravillasmundo/CañoCristales/",
      imagen:
        "https://cdn.colombia.com/sdi/2019/02/12/guia-para-tu-viaje-a-cano-cristales-709621.jpg",
    },
  ];
  return (
    <div className="container-card-lugares">
      {maravillasNacionales.map((lugar, index) => (
        <Lugar
          name={lugar.name}
          imagen={lugar.imagen}
          linklugares={lugar.linklugares}
        />
      ))}
    </div>
  );
}

export function CardInternacionalesMaravillas() {
  const maravillasInternacionales = [
    {
      name: "Africa",
      linklugares: "/maravillasmundo/Africa/",
      imagen: Africa,
    },
    {
      name: "Asia",
      linklugares: "/maravillasmundo/Asia/",
      imagen: Asia,
    },
    {
      name: "Centro America",
      linklugares: "/maravillasmundo/CentroAmerica/",
      imagen: CentroAmerica,
    },
    {
      name: "Europa",
      linklugares: "/maravillasmundo/Europa/",
      imagen: Europa,
    },
    {
      name: "Medio Oriente ",
      linklugares: "/maravillasmundo/MedioOriente/",
      imagen: MedioOriente,
    },
    {
      name: "Norte America",
      linklugares: "/maravillasmundo/NorteAmerica/",
      imagen: NorteAmerica,
    },
    {
      name: "Oceanía",
      linklugares: "/maravillasmundo/Oceania/",
      imagen: Oceania,
    },
    {
      name: "Sur America",
      linklugares: "/maravillasmundo/SurAmerica/",
      imagen: SurAmerica,
    },
  ];
  return (
    <div className="container-card-lugares">
      {maravillasInternacionales.map((lugar, index) => (
        <Lugar
          name={lugar.name}
          imagen={lugar.imagen}
          linklugares={lugar.linklugares}
        />
      ))}
    </div>
  );
}
