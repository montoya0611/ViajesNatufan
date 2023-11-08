import React from 'react'
import "./FamiliaNatufan.css"
import {Galeria,GaleriaDos} from '../components/CarouselGaleria'
import Testimonios from '../components/testimonios'
import Footer from '../components/Footer'


function FamiliaNatufan() {
  return (
    <>
     <div className='container-tittle-galeria'>
        <h5 className='tittle-galeria'>BIENVENIDOS A NUESTRA FAMILIA </h5>
        <h6 className='subtittle-galeria'> Estos son algunos recuerdos que nos han dejado nuestras aventuras</h6>
     </div>
     <Galeria/>
     <div className='container-galeria-dos'>
     <GaleriaDos/>
     </div>
     <Testimonios/>
     <h9 className="subtittle-familia ">Utiliza nuestro hashtag</h9>
     <h7 className="tittle-familia"> #FamiliaNatufan</h7>
     <Footer/>
    </>
  )
}

export default FamiliaNatufan
