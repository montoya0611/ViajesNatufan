import React from 'react'
import "./Cartagena.css"
import {PlanesCartagena}  from '../components/Planes'
import Carousel from '../components/Carousel'
import Footer from "../components/Footer"
import { CardPromoCartagena } from '../components/Cardpromo'


function Cartagena() {
  return (
    <>
         <Carousel/>
         <div className='container-tittle'>
         <h5 className='text-Cartagena'>Cartagena</h5>
         <h5 className='subtitle-Cartagena'>con natufan,mas cerca de tu destino</h5>
         </div>
          <PlanesCartagena/>
          <div className='container-global-promo-cartagena'>
          <h3 className='title'>Promociones</h3>
          <h4 className='subtitle'>No dejes pasar esta oportunidad  y vive tu aventura a un mejor precio</h4>
          
          <div className='espacio-entre-cartagena'>
          <CardPromoCartagena/>
          </div>
          </div>
          <Footer/>
    </>
  )
}

export default Cartagena
