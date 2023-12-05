import React from "react";
import { Link } from "gatsby";
import "./Cardpromo.css";

function CardPromo({ date, exit, place, night }) {
  return (
    <div className="container-cardpromo">
      <img
        className="photo-promo"
        src="https://images.pexels.com/photos/4397890/pexels-photo-4397890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="fotopromo"
      />
      <Link className="button-buy">COMPRAR YA</Link>
      <p className="title-promo"> {place} </p>
      <p className="day-promo">{night} </p>
      <div className="info-promo">
        <p className="date-promo">Fecha de vigencia </p>
        <p>{date} </p>
        <p className="date-promo">Fecha de salida </p>
        <p>{exit}</p>
      </div>
    </div>
  );
}

export function CardpromoStart() {
  return (
    <div className="container-promo">
      <CardPromo
        date="01 febreo 3o "
        exit="30 noviembe"
        place="Guajira"
        night="4noches"
      />

      <CardPromo
        date="01 febreo 3o "
        exit="30 noviembe"
        place="Guajira"
        night="4noches"
      />
      <CardPromo
        date="01 febreo 3o "
        exit="30 noviembe"
        place="Guajira"
        night="4noches"
      />
      <CardPromo
        date="01 febreo 3o "
        exit="30 noviembe"
        place="Guajira"
        night="4noches"
      />
    </div>
  );
}

export function CardpromoTravel() {
  return (
    <div className="container-promo">
      <CardPromo
        date="01 febreo 3o "
        exit="30 noviembe"
        place="Guajira"
        night="4noches"
      />
      <CardPromo
        date="01 febreo 3o "
        exit="30 noviembe"
        place="Guajira"
        night="4noches"
      />
      <CardPromo
        date="01 febreo 3o "
        exit="30 noviembe"
        place="Guajira"
        night="4noches"
      />
      <CardPromo
        date="01 febreo 3o "
        exit="30 noviembe"
        place="Guajira"
        night="4noches"
      />
      <CardPromo
        date="01 febreo 3o "
        exit="30 noviembe"
        place="Guajira"
        night="4noches"
      />
    </div>
  );
}
export function CardpromoTravelPlace() {
  return (
    <div className="container-promo">
      <CardPromo
        date="01 febreo 3o "
        exit="30 noviembe"
        place="Guajira"
        night="4noches"
      />
      <CardPromo
        date="01 febreo 3o "
        exit="30 noviembe"
        place="Guajira"
        night="4noches"
      />
      <CardPromo
        date="01 febreo 3o "
        exit="30 noviembe"
        place="Guajira"
        night="4noches"
      />
      <CardPromo
        date="01 febreo 3o "
        exit="30 noviembe"
        place="Guajira"
        night="4noches"
      />
      <CardPromo
        date="01 febreo 3o "
        exit="30 noviembe"
        place="Guajira"
        night="4noches"
      />
    </div>
  );
}

export function CardPromoCartagena() {
  return (
    <div className="container-promo-destinos">
      <CardPromo
        date="01 febreo 3o "
        exit="30 noviembe"
        place="Guajira"
        night="4noches"
      />
      <CardPromo
        date="01 febreo 3o "
        exit="30 noviembe"
        place="Guajira"
        night="4noches"
      />
      <CardPromo
        date="01 febreo 3o "
        exit="30 noviembe"
        place="Guajira"
        night="4noches"
      />
    </div>
  );
}
