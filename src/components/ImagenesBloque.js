import React, { useState } from "react";
import "./imagen.css";
import SanAndres from "../pages/AventurasMar/SanAndres";

function Imagenes({ imagenpromo, linkimagen }) {
  const [anchoImagen, setAnchoImagen] = useState(350);
  const [altoImagen, setAltoImagen] = useState(350);

  const cambiarTamañoImagen = () => {
    if (anchoImagen === 350 && altoImagen === 350) {
      setAnchoImagen(450);
      setAltoImagen(450);
    } else {
      setAnchoImagen(350);
      setAltoImagen(350);
    }
  };
  return (
    <div className="container-imagenes">
      <img
        className="imagen-promocion"
        src={imagenpromo}
        id="MiImagen"
        style={{ width: anchoImagen + "px", height: altoImagen + "px" }}
        onClick={cambiarTamañoImagen}
      />
      <a className="preguntar" href={linkimagen} target="_blank">
        Cotizar
      </a>
    </div>
  );
}

export function ImagenesSanAndres() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };
  const SanAndres = [
    {
      imagenpromo:
        "https://www.porcolombiayelmundotoureventos.com/wp-content/uploads/2021/05/SAN-ANDRES-2X1-scaled.jpg",
      linkimagen: crearLinkWhatsapp("Pregunta por San Andres en tour"),
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
  ];

  return (
    <div className="container-imagenes-Sanandres">
      {SanAndres.map((imagen, index) => (
        <Imagenes
          imagenpromo={imagen.imagenpromo}
          linkimagen={imagen.linkimagen}
        />
      ))}
    </div>
  );
}
export function ImagenesPuntaCana() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };
  const PuntaCana = [
    {
      imagenpromo: "",
      linkimagen: crearLinkWhatsapp("Pregunta por San Andres en tour"),
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
  ];

  return (
    <div className="container-imagenes-Sanandres">
      {PuntaCana.map((imagen, index) => (
        <Imagenes
          imagenpromo={imagen.imagenpromo}
          linkimagen={imagen.linkimagen}
        />
      ))}
    </div>
  );
}

export function ImagenesCoveñas() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };
  const Coveñas = [
    {
      imagenpromo: "",
      linkimagen: crearLinkWhatsapp("Pregunta por San Andres en tour"),
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
  ];

  return (
    <div className="container-imagenes-Sanandres">
      {Coveñas.map((imagen, index) => (
        <Imagenes
          imagenpromo={imagen.imagenpromo}
          linkimagen={imagen.linkimagen}
        />
      ))}
    </div>
  );
}

export function ImagenesCartagena() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };
  const Coveñas = [
    {
      imagenpromo: "",
      linkimagen: crearLinkWhatsapp("Pregunta por San Andres en tour"),
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
  ];

  return (
    <div className="container-imagenes-Sanandres">
      {Coveñas.map((imagen, index) => (
        <Imagenes
          imagenpromo={imagen.imagenpromo}
          linkimagen={imagen.linkimagen}
        />
      ))}
    </div>
  );
}

export function ImagenesCapurgana() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };
  const Capurgana = [
    {
      imagenpromo: "",
      linkimagen: crearLinkWhatsapp("Pregunta por San Andres en tour"),
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
  ];

  return (
    <div className="container-imagenes-Sanandres">
      {Capurgana.map((imagen, index) => (
        <Imagenes
          imagenpromo={imagen.imagenpromo}
          linkimagen={imagen.linkimagen}
        />
      ))}
    </div>
  );
}

export function ImagenesSantaMarta() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };
  const SantaMarta = [
    {
      imagenpromo: "",
      linkimagen: crearLinkWhatsapp("Pregunta por San Andres en tour"),
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
  ];

  return (
    <div className="container-imagenes-Sanandres">
      {SantaMarta.map((imagen, index) => (
        <Imagenes
          imagenpromo={imagen.imagenpromo}
          linkimagen={imagen.linkimagen}
        />
      ))}
    </div>
  );
}

export function ImagenesCuba() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };
  const Cuba = [
    {
      imagenpromo: "",
      linkimagen: crearLinkWhatsapp("Pregunta por San Andres en tour"),
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
  ];

  return (
    <div className="container-imagenes-Sanandres">
      {Cuba.map((imagen, index) => (
        <Imagenes
          imagenpromo={imagen.imagenpromo}
          linkimagen={imagen.linkimagen}
        />
      ))}
    </div>
  );
}

export function ImagenesMiami() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };
  const Miami = [
    {
      imagenpromo: "",
      linkimagen: crearLinkWhatsapp("Pregunta por San Andres en tour"),
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
  ];

  return (
    <div className="container-imagenes-Sanandres">
      {Miami.map((imagen, index) => (
        <Imagenes
          imagenpromo={imagen.imagenpromo}
          linkimagen={imagen.linkimagen}
        />
      ))}
    </div>
  );
}
export function ImagenesAruba() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };
  const Aruba = [
    {
      imagenpromo: "",
      linkimagen: crearLinkWhatsapp("Pregunta por San Andres en tour"),
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
  ];

  return (
    <div className="container-imagenes-Sanandres">
      {Aruba.map((imagen, index) => (
        <Imagenes
          imagenpromo={imagen.imagenpromo}
          linkimagen={imagen.linkimagen}
        />
      ))}
    </div>
  );
}

export function ImagenesCancun() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };
  const Cancun = [
    {
      imagenpromo: "",
      linkimagen: crearLinkWhatsapp("Pregunta por San Andres en tour"),
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
  ];

  return (
    <div className="container-imagenes-Sanandres">
      {Cancun.map((imagen, index) => (
        <Imagenes
          imagenpromo={imagen.imagenpromo}
          linkimagen={imagen.linkimagen}
        />
      ))}
    </div>
  );
}

export function ImagenesCurazao() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };
  const Curazao = [
    {
      imagenpromo: "",
      linkimagen: crearLinkWhatsapp("Pregunta por San Andres en tour"),
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
    {
      imagenpromo:
        "https://0201.nccdn.net/1_2/000/000/17c/0d6/PROMO-SAN-ANDRES.jpg",
    },
  ];

  return (
    <div className="container-imagenes-Sanandres">
      {Curazao.map((imagen, index) => (
        <Imagenes
          imagenpromo={imagen.imagenpromo}
          linkimagen={imagen.linkimagen}
        />
      ))}
    </div>
  );
}
