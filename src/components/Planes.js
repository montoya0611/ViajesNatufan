import React from "react";
import "./Planes.css";

export function PlanesCartagena() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };
  const Cartagena = [
    {
      tittle: "Cartagena Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca de los planes de Cartagena🌏🌴⛅"
      ),
    },
    {
      tittle: "Cartagena Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
    },
    {
      tittle: "Cartagena Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
    },
    {
      tittle: "Cartagena Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
    },
  ];
  return (
    <div className="container-cards-cartagena">
      {Cartagena.map((plan, index) => (
        <Plan
          tittle={plan.tittle}
          salidas={plan.salidas}
          lugares={plan.lugares}
          tarifa={plan.tarifa}
          documento={plan.documento}
          link={plan.link}
        />
      ))}
    </div>
  );
}

export function PlanesAmazonas() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };

  const Amazonas = [
    {
      imagen:
        "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Amazonas Aéreo",
      salidas: "22 de diciembre 2023",
      lugares: "3 noches o 4 noches",
      tarifa: "$ 1.895.000",
      documento:
        "https://docs.google.com/document/d/1IoviuB_jh3ZxYPXlaP4kFAu6JkUxBUz0/edit?usp=sharing&ouid=104923912458351669290&rtpof=true&sd=true",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca de los planes de Amazonas CB🌏🌴⛅"
      ),
    },
  ];
  return (
    <div className="container-cards-cartagena">
      {Amazonas.map((plan, index) => (
        <Plan
          tittle={plan.tittle}
          salidas={plan.salidas}
          lugares={plan.lugares}
          tarifa={plan.tarifa}
          documento={plan.documento}
          link={plan.link}
          imagen={plan.imagen}
        />
      ))}
    </div>
  );
}

export function PlanesGuajira() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };

  const Guajira = [
    {
      imagen:
        "https://images.pexels.com/photos/13209625/pexels-photo-13209625.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Guajira Aereo",
      salidas: "10 de Enero 2024",
      lugares: "5 dias, 4 noches",
      tarifa: "$ 2.505.000",
      documento:
        "https://docs.google.com/document/d/1BLgHgXS65EUny51PKOMCFykODUr1X1oj/edit?usp=sharing&ouid=104923912458351669290&rtpof=true&sd=true",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca de los planes Guajira Aereo CB🌏🌴⛅"
      ),
    },

    {
      imagen:
        "https://media.istockphoto.com/id/1311459418/es/foto/cabo-de-la-vela-colombia-24-de-agosto-de-2015-costa-de-la-pen%C3%ADnsula-de-la-guajira-en-colombia.jpg?b=1&s=612x612&w=0&k=20&c=sXLGgX8YmttizVKSUAZZgOsLy5BUJOF7P7YxZN5f-y0=",
      tittle: "Guajira Bloqueo",
      salidas: "19 de Diciembre 2023",
      lugares: "3 Noches o 4 Noches",
      tarifa: "$ 1.435.000",
      documento:
        "https://docs.google.com/document/d/12u3vK99wm8QwX02VMT_gjNjgx0zG0mMo/edit?usp=sharing&ouid=104923912458351669290&rtpof=true&sd=true",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca de los planes Guajira Aereo CB🌏🌴⛅"
      ),
    },

    {
      imagen:
        "https://media.istockphoto.com/id/176616416/es/foto/hamacas.jpg?b=1&s=612x612&w=0&k=20&c=L4O1vqE861EMq5DuyQxudQQ9FMy47zDL9nabFYXDG1Y=",
      tittle: "Ruta Guajira",
      salidas: "8 de Diciembre 2023",
      lugares: "5 dias, 4 noches",
      tarifa: "$ $1.585.000",
      documento:
        "https://docs.google.com/document/d/1e2Ue1pX3zlz9mqEEvTdyxgoqFr1NgzMN/edit?usp=drive_link&ouid=104923912458351669290&rtpof=true&sd=true",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca de los plan Ruta Guajira CB🌏🌴⛅"
      ),
    },

    {
      imagen:
        "https://media.istockphoto.com/id/1445586264/es/foto/paisaje-de-playa-de-punta-gallinas-en-guajira-colombia.jpg?b=1&s=612x612&w=0&k=20&c=CyWCcWGtI2afJzC0ZA9XiSXMOfFMnoDYStcNEtweRzs=",
      tittle: "Guajira Terrestre",
      salidas: "10 de Enero del 2024",
      lugares: "5 dias, 4 noches",
      tarifa: "$ 1.395.000",
      documento:
        "https://docs.google.com/document/d/1oZsSK-7xhBHCSVu-hiXtCfcLKoo7vrym/edit?usp=sharing&ouid=104923912458351669290&rtpof=true&sd=true",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca de los plan  Guajira terrestre CB🌏🌴⛅"
      ),
    },
  ];
  return (
    <div className="container-cards-cartagena">
      {Guajira.map((plan, index) => (
        <Plan
          tittle={plan.tittle}
          salidas={plan.salidas}
          lugares={plan.lugares}
          tarifa={plan.tarifa}
          documento={plan.documento}
          link={plan.link}
          imagen={plan.imagen}
        />
      ))}
    </div>
  );
}

export function PlanesTolima() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };

  const Tolima = [
    {
      imagen:
        "https://media.istockphoto.com/id/1134101111/es/foto/hermosa-vista-de-la-cima-nevada-de-tolima-a.jpg?b=1&s=612x612&w=0&k=20&c=78TY-46MPhj43YMqW87UEtulsN0gUWAiJvB7sdPbbvk=",
      tittle: " Ruta Tolima",
      salidas: "30 de noviembre del 2023",
      lugares: "5 noches, 6 días",
      tarifa: "$ 1.999.000",
      documento:
        "https://drive.google.com/file/d/1qRD6MOC8Dx5f1BMzUKzcoG0T2A_6T0dv/view?usp=sharing",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca del plan Ruta Tolima CB🌏🌴⛅"
      ),
    },
    {
      imagen:
        "https://media.istockphoto.com/id/1183024723/es/foto/hermoso-paisaje-tolima-nevado-con-frailejones-lago-y-vegetaci%C3%B3n-colombia.jpg?b=1&s=612x612&w=0&k=20&c=fcOCKv2hM9podVHoDwSaZSCvpsHXCDSYRPj_z5OypnE=",
      tittle: "Sur Colombia Aéreo",
      salidas: "Marzo 13 del 2024",
      lugares: "5 noches, 6 días",
      tarifa: "$ 1.935.000",
      documento:
        "https://drive.google.com/file/d/1e5SzCIx4U5c3DBagy1BdbjUemOnBShNh/view?usp=sharing",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca del plan Sur Colombia CB🌏🌴⛅"
      ),
    },
    {
      imagen:
        "https://elcronista.co/assets/media/iblog/post/el-plan-es-ibague.jpg",
      tittle: "Sur Colombia Terrestre",
      salidas: "Febrero 20 del 2024",
      lugares: "5 noches, 6 días",
      tarifa: "$ 1.045.000",
      documento:
        "https://drive.google.com/file/d/1x1JKkX_Kn4euwIXZlbvdr5vRGEq_RFoI/view?usp=sharing",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca del plan Sur Colombia CB🌏🌴⛅"
      ),
    },
    {
      imagen:
        "https://cdn.colombia.com/sdi/2021/03/02/tolima-destinos-termales-la-cabana-897266.jpg",
      tittle: "Tolima en el agua",
      salidas: "Enero 10 del 2024",
      lugares: "4 noches, 5 días",
      tarifa: "$ 1.299.000",
      documento:
        "https://drive.google.com/file/d/16EmeKF-AtfHWGpw4h3d6_GEWh13HYoK9/view?usp=sharingf",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca del plan Tolima en agua CB🌏🌴⛅"
      ),
    },
  ];
  return (
    <div className="container-cards-cartagena">
      {Tolima.map((plan, index) => (
        <Plan
          tittle={plan.tittle}
          salidas={plan.salidas}
          lugares={plan.lugares}
          tarifa={plan.tarifa}
          documento={plan.documento}
          link={plan.link}
          imagen={plan.imagen}
        />
      ))}
    </div>
  );
}

export function PlanesLlanos() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };

  const Llanos = [
    {
      imagen:
        "https://gisaico.com/wp-content/uploads/2022/01/christine-mendoza-HDDZOfX8pLA-unsplash-scaled.jpg",
      tittle: "Llanos Terrestre",
      salidas: "20 de marzo del 2024",
      lugares: " 4 noches, 5 días",
      tarifa: "$895.000",
      documento:
        "https://drive.google.com/file/d/1E771ALBNU34Of9Cc9M6Bh8NFXHHZTqHR/view?usp=sharing",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca del plan Llanos Terrestre CB🌏🌴⛅"
      ),
    },
    {
      imagen:
        "https://colombianadeturismo.co/wp-content/uploads/2017/11/llanos3.jpg",
      tittle: "Llanos Aéreos",
      salidas: "7 de diciembre del 2023",
      lugares: "4 noches, 5 días",
      tarifa: "$ 1.910.000",
      documento:
        "https://drive.google.com/file/d/1LQNCWH851ypeY3oF-BapswPHqWVgqfN4/view?usp=sharing",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca del plan Llanos Aéreo CB🌏🌴⛅"
      ),
    },
  ];
  return (
    <div className="container-cards-cartagena">
      {Llanos.map((plan, index) => (
        <Plan
          tittle={plan.tittle}
          salidas={plan.salidas}
          lugares={plan.lugares}
          tarifa={plan.tarifa}
          documento={plan.documento}
          link={plan.link}
          imagen={plan.imagen}
        />
      ))}
    </div>
  );
}

export function PlanesSantander() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };

  const Santander = [
    {
      imagen:
        "https://m.vanguardia.com/especiales-vanguardia/contenido/centenario/turismo-y-medio-ambiente/turismo-y-medio-ambiente-Santander/turismo-y-medio-ambiente-santander-proyeccion.jpg",
      tittle: "Santander Terrestre",
      salidas: "11 de enero del 2024",
      lugares: "4 noches, 5 días",
      tarifa: "$ 1.745.000",
      documento:
        "https://drive.google.com/file/d/1x1JKkX_Kn4euwIXZlbvdr5vRGEq_RFoI/view?usp=sharing",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca del plan Santander terrestre CB🌏🌴⛅"
      ),
    },

    {
      imagen: "https://almasaventureras.com/wp-content/uploads/2021/01/10.jpg",
      tittle: "Santander Aventura",
      salidas: "15 de Marzo del 2024",
      lugares: "3 noches, 4 días",
      tarifa: "$ 695.000",
      documento:
        "https://drive.google.com/file/d/18X1UUFuMCRD1baC7-DF2n0z4__8S8_sZ/view?usp=sharing",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca del plan Santander Aventura CB🌏🌴⛅"
      ),
    },
  ];
  return (
    <div className="container-cards-cartagena">
      {Santander.map((plan, index) => (
        <Plan
          tittle={plan.tittle}
          salidas={plan.salidas}
          lugares={plan.lugares}
          tarifa={plan.tarifa}
          documento={plan.documento}
          link={plan.link}
          imagen={plan.imagen}
        />
      ))}
    </div>
  );
}

export function PlanesBoyaca() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };

  const Boyaca = [
    {
      imagen:
        "https://chipviajero.com/wp-content/uploads/2017/03/Los-Pueblos-M%C3%A1s-Lindos-De-Boyac%C3%A1-Colombia-Chip-Viajero-5.jpg",
      tittle: "Boyaca Terrestre",
      salidas: "11 de enero del 2024",
      lugares: "4 noches, 5 días",
      tarifa: "$975.000",
      documento:
        "https://docs.google.com/document/d/13YnWXC3fF3S14qMleQ75GXOBJ-16f7jt/edit?usp=sharing&ouid=104923912458351669290&rtpof=true&sd=true",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca de Boyaca terrestre CB🌏🌴⛅"
      ),
    },
    {
      imagen:
        "https://media.viajando.travel/p/70d7f733d6225a690217df0ea0e7cd57/adjuntos/236/imagenes/000/458/0000458257/1200x0/smart/boyaca-duitama.jpg",
      tittle: "Boyaca Aereo",
      salidas: "18 de enero del 2024",
      lugares: "4 noches, 5 días",
      tarifa: "$1.895.000",
      documento:
        "https://docs.google.com/document/d/1LMFu0cc3pQkY2hoUO5GlYsjEmGwY-_dr/edit?usp=sharing&ouid=104923912458351669290&rtpof=true&sd=true",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca de Boyaca Aereo CB🌏🌴⛅"
      ),
    },
  ];
  return (
    <div className="container-cards-cartagena">
      {Boyaca.map((plan, index) => (
        <Plan
          tittle={plan.tittle}
          salidas={plan.salidas}
          lugares={plan.lugares}
          tarifa={plan.tarifa}
          documento={plan.documento}
          link={plan.link}
          imagen={plan.imagen}
        />
      ))}
    </div>
  );
}

export function PlanesEjeCafetero() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };

  const EjeCafetero = [
    {
      imagen:
        "https://images.unsplash.com/photo-1663316026715-146a98c2a720?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWplJTIwY2FmZXRlcm8lMjBjb2xvbWJpYXxlbnwwfHwwfHx8MA%3D%3D",
      tittle: " Ruta Eje Cafetero ",
      salidas: "21 de enero del 2024",
      lugares: "Puedes elegir hasta 5 noches",
      tarifa: "$545.000",
      documento:
        "https://drive.google.com/file/d/1iwDze3x1vkdmmL_HrS4LxOUNqwMZowXm/view?usp=sharing",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca del plan ruta Eje Cafetero CB🌏🌴⛅"
      ),
    },
    {
      imagen:
        "https://rutaviajera.seguroparaviaje.com/wp-content/uploads/2022/08/7-mejores-sitios-turisticos-del-eje-cafetero-colombiano.jpg",
      tittle: " Eje Cafetero Origen",
      salidas: "22 de marzo del 2024",
      lugares: "3 noches, 4 días",
      tarifa: "$665.000",
      documento:
        "https://drive.google.com/file/d/1J3y26mkmRy9fz3thrRH1OphWjC-m3EWu/view?usp=sharing",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca del plan  Eje Cafetero Origen CB🌏🌴⛅"
      ),
    },

    {
      imagen:
        "https://expotur-eco.com/wp-content/uploads/2019/11/eje-cafetero-colombia.-foto-tomada-de-viajes-luxury.jpg",
      tittle: " Eje Cafetero Aéreo",
      salidas: "22 de marzo del 2024",
      lugares: "3 noches, 4 días",
      tarifa: "$ 1.725.000",
      documento:
        "https://drive.google.com/file/d/1QNz4S863Mzzyt0FxgoA4UVTkynTKvqt2/view?usp=sharing",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca del plan  Eje Cafetero Aereo CB🌏🌴⛅"
      ),
    },
  ];
  return (
    <div className="container-cards-cartagena">
      {EjeCafetero.map((plan, index) => (
        <Plan
          tittle={plan.tittle}
          salidas={plan.salidas}
          lugares={plan.lugares}
          tarifa={plan.tarifa}
          documento={plan.documento}
          link={plan.link}
          imagen={plan.imagen}
        />
      ))}
    </div>
  );
}
export function PlanesDesierto() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };

  const Desierto = [
    {
      imagen:
        "https://www.rutaecologica.com/wp-content/uploads/2021/04/TATACOA3-1-870x555-1-870x555.jpg",
      tittle: "Huila al límite",
      salidas: "16 de diciembre del 2023",
      lugares: "5 noches 6 días",
      tarifa: "$2.455.000",
      documento:
        "https://drive.google.com/file/d/18vs-VHpTK3VDp4SAivzrkNFytxjQdJng/view?usp=sharing",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca del plan Huila al límite CB🌏🌴⛅"
      ),
    },
    {
      imagen:
        "https://www.rutaecologica.com/wp-content/uploads/2021/05/WhatsApp-Image-2021-09-07-at-12.21.32-PM.jpeg",
      tittle: "Huila Terrestre",
      salidas: "20 de marzo del 2024",
      lugares: "4 noches 5 días",
      tarifa: "$ 1.095.000",
      documento:
        "https://drive.google.com/file/d/1kVlUrPMOnsZW3qC2sPOm3V24U_SzcRIL/view?usp=sharing",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca del plan Huila terrestre CB🌏🌴⛅"
      ),
    },

    {
      imagen:
        "https://media-cdn.tripadvisor.com/media/photo-s/10/0e/55/59/desierto-de-la-tatacoa.jpg",
      tittle: "Desierto Tatacoa",
      salidas: "19 de enero del 2024",
      lugares: "2 noches 3 días",
      tarifa: "$ 575.000",
      documento:
        "https://drive.google.com/file/d/1d62jBf0TingRtWwYKIcWWI1CwUjfvGZr/view?usp=sharing",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca del plan Desierto Tatacoa CB🌏🌴⛅"
      ),
    },
  ];
  return (
    <div className="container-cards-cartagena">
      {Desierto.map((plan, index) => (
        <Plan
          tittle={plan.tittle}
          salidas={plan.salidas}
          lugares={plan.lugares}
          tarifa={plan.tarifa}
          documento={plan.documento}
          link={plan.link}
          imagen={plan.imagen}
        />
      ))}
    </div>
  );
}

export function PlanesCañoCristales() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };

  const CañoCristales = [
    {
      imagen:
        "https://www.cano-cristales.com/wp-content/uploads/2023/02/Cano-Cristales-La-Macarena-Colombia-8-1-684x1024.jpg",
      tittle: "Caño Cristales   ",
      salidas: "30 de noviembre 2023",
      lugares: "2 noches 3 días",
      tarifa: "$ 2.895.000",
      documento:
        "https://drive.google.com/file/d/13Mfr44QbttC8ahjg8NrJw4shMpH9mtkw/view?usp=sharing",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca del plan caño cristales 3 Dias🌏🌴⛅"
      ),
    },

    {
      imagen:
        "https://www.colombiaventura.co/wp-content/uploads/2017/04/Portada-Ca%C3%B1oCristales.jpg",
      tittle: "Caño Cristales en escalada ",
      salidas: "30 de noviembre 2023",
      lugares: "4 noches 5 días",
      tarifa: "$ 3.445.000",
      documento:
        "https://drive.google.com/file/d/1CmJdUsOpRvJQPBJ2B1LzXKzfQnNFT3ij/view?usp=sharing",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca del plan caño cristales 3 Dias🌏🌴⛅"
      ),
    },
  ];
  return (
    <div className="container-cards-cartagena">
      {CañoCristales.map((plan, index) => (
        <Plan
          tittle={plan.tittle}
          salidas={plan.salidas}
          lugares={plan.lugares}
          tarifa={plan.tarifa}
          documento={plan.documento}
          link={plan.link}
          imagen={plan.imagen}
        />
      ))}
    </div>
  );
}

function Plan({ tittle, salidas, lugares, tarifa, documento, link, imagen }) {
  return (
    <div
      className="container-card-planes"
      style={{ backgroundImage: `url(${imagen})` }}
    >
      <h6 className="title-card-planes">{tittle} </h6>
      <div className="container-card-elementos">
        <div className="container-card-dos">
          <h7 className="text-salidas-planes">Plan activo hasta</h7>
          <h8 className="text-salidas-contenido">{salidas} </h8>
          <h7 className="text-conocer">Tiempo de viaje</h7>
          <h8 className="text-conocer-contenido">{lugares} </h8>
        </div>

        <div className="container-card-tres">
          <h7 className="text-tarifa-planes">Tarifa desde</h7>
          <h8 className="text-tarifa-contenido">{tarifa} </h8>
          <div className="container-descarga">
            <h7 className="text-document">
              Descarga para conocer todos los detalles
            </h7>
            <a className="descarga-document" href={documento} target="_blank">
              Descargar PDF
            </a>
          </div>
        </div>
      </div>
      <a className="button-cotizar" href={link} target="_blank">
        Cotizar
      </a>
    </div>
  );
}

export function PlanesEuropa() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };

  const Europa = [
    {
      imagen:
        "https://images.pexels.com/photos/13209625/pexels-photo-13209625.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Caño Cristales Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca de los planes de Amazonas🌏🌴⛅"
      ),
    },
    {
      imagen:
        "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Caño Cristales Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
    },
    {
      imagen:
        "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Amazonas Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
    },
    {
      imagen:
        "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Amazonas Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
    },
  ];
  return (
    <div className="container-cards-cartagena">
      {Europa.map((plan, index) => (
        <Plan
          tittle={plan.tittle}
          salidas={plan.salidas}
          lugares={plan.lugares}
          tarifa={plan.tarifa}
          documento={plan.documento}
          link={plan.link}
          imagen={plan.imagen}
        />
      ))}
    </div>
  );
}

export function PlanesAsia() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };

  const Asia = [
    {
      imagen:
        "https://images.pexels.com/photos/13209625/pexels-photo-13209625.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Caño Cristales Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca de los planes de Amazonas🌏🌴⛅"
      ),
    },
    {
      imagen:
        "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Caño Cristales Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
    },
    {
      imagen:
        "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Amazonas Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
    },
    {
      imagen:
        "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Amazonas Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
    },
  ];
  return (
    <div className="container-cards-cartagena">
      {Asia.map((plan, index) => (
        <Plan
          tittle={plan.tittle}
          salidas={plan.salidas}
          lugares={plan.lugares}
          tarifa={plan.tarifa}
          documento={plan.documento}
          link={plan.link}
          imagen={plan.imagen}
        />
      ))}
    </div>
  );
}

export function PlanesCentroAmerica() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };

  const CentroAmerica = [
    {
      imagen:
        "https://images.pexels.com/photos/13209625/pexels-photo-13209625.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Caño Cristales Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca de los planes de Amazonas🌏🌴⛅"
      ),
    },
    {
      imagen:
        "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Caño Cristales Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
    },
    {
      imagen:
        "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Amazonas Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
    },
    {
      imagen:
        "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Amazonas Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
    },
  ];
  return (
    <div className="container-cards-cartagena">
      {CentroAmerica.map((plan, index) => (
        <Plan
          tittle={plan.tittle}
          salidas={plan.salidas}
          lugares={plan.lugares}
          tarifa={plan.tarifa}
          documento={plan.documento}
          link={plan.link}
          imagen={plan.imagen}
        />
      ))}
    </div>
  );
}

export function PlanesMedioOriente() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };

  const MedioOriente = [
    {
      imagen:
        "https://images.pexels.com/photos/13209625/pexels-photo-13209625.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Caño Cristales Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca de los planes de Amazonas🌏🌴⛅"
      ),
    },
    {
      imagen:
        "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Caño Cristales Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
    },
    {
      imagen:
        "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Amazonas Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
    },
    {
      imagen:
        "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Amazonas Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
    },
  ];
  return (
    <div className="container-cards-cartagena">
      {MedioOriente.map((plan, index) => (
        <Plan
          tittle={plan.tittle}
          salidas={plan.salidas}
          lugares={plan.lugares}
          tarifa={plan.tarifa}
          documento={plan.documento}
          link={plan.link}
          imagen={plan.imagen}
        />
      ))}
    </div>
  );
}

export function PlanesNorteAmerica() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };

  const NorteAmerica = [
    {
      imagen:
        "https://images.pexels.com/photos/13209625/pexels-photo-13209625.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Caño Cristales Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca de los planes de Amazonas🌏🌴⛅"
      ),
    },
    {
      imagen:
        "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Caño Cristales Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
    },
    {
      imagen:
        "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Amazonas Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
    },
    {
      imagen:
        "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Amazonas Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
    },
  ];
  return (
    <div className="container-cards-cartagena">
      {NorteAmerica.map((plan, index) => (
        <Plan
          tittle={plan.tittle}
          salidas={plan.salidas}
          lugares={plan.lugares}
          tarifa={plan.tarifa}
          documento={plan.documento}
          link={plan.link}
          imagen={plan.imagen}
        />
      ))}
    </div>
  );
}

export function PlanesOceania() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };

  const Oceania = [
    {
      imagen:
        "https://images.pexels.com/photos/13209625/pexels-photo-13209625.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Caño Cristales Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca de los planes de Amazonas🌏🌴⛅"
      ),
    },
    {
      imagen:
        "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Caño Cristales Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
    },
    {
      imagen:
        "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Amazonas Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
    },
    {
      imagen:
        "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Amazonas Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
    },
  ];
  return (
    <div className="container-cards-cartagena">
      {Oceania.map((plan, index) => (
        <Plan
          tittle={plan.tittle}
          salidas={plan.salidas}
          lugares={plan.lugares}
          tarifa={plan.tarifa}
          documento={plan.documento}
          link={plan.link}
          imagen={plan.imagen}
        />
      ))}
    </div>
  );
}

export function PlanesSurAmerica() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };

  const SurAmerica = [
    {
      imagen:
        "https://images.pexels.com/photos/13209625/pexels-photo-13209625.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Caño Cristales Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca de los planes de Amazonas🌏🌴⛅"
      ),
    },
    {
      imagen:
        "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Caño Cristales Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
    },
    {
      imagen:
        "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Amazonas Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
    },
    {
      imagen:
        "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Amazonas Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
    },
  ];
  return (
    <div className="container-cards-cartagena">
      {SurAmerica.map((plan, index) => (
        <Plan
          tittle={plan.tittle}
          salidas={plan.salidas}
          lugares={plan.lugares}
          tarifa={plan.tarifa}
          documento={plan.documento}
          link={plan.link}
          imagen={plan.imagen}
        />
      ))}
    </div>
  );
}

export function PlanesAfrica() {
  const crearLinkWhatsapp = (message) => {
    const whatsappNumber = "573108255483";

    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };

  const Africa = [
    {
      imagen:
        "https://images.pexels.com/photos/13209625/pexels-photo-13209625.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Africa",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
      link: crearLinkWhatsapp(
        "Hola Natufan, requiero mas información acerca de los planes de Amazonas🌏🌴⛅"
      ),
    },
    {
      imagen:
        "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Caño Cristales Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
    },
    {
      imagen:
        "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Amazonas Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
    },
    {
      imagen:
        "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=600",
      tittle: "Amazonas Unico",
      salidas: "8 de noviembre 2023 / 30 enero 2024 / 6 de noviembre 2023",
      lugares: "Parque de cartagena / Isla fuerte / Isla guarne",
      tarifa: "$11.900.000",
      documento: "/documents/Colombia (1).pdf",
    },
  ];
  return (
    <div className="container-cards-cartagena">
      {Africa.map((plan, index) => (
        <Plan
          tittle={plan.tittle}
          salidas={plan.salidas}
          lugares={plan.lugares}
          tarifa={plan.tarifa}
          documento={plan.documento}
          link={plan.link}
          imagen={plan.imagen}
        />
      ))}
    </div>
  );
}
