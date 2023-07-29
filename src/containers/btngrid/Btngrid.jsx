import React from 'react'
import './btngrid.css'
import visas from '../../Assets/imagenes/photo-1504355080015-bba52674577b.jpg'
import visasicons from '../../Assets/visas.png'
import tax from '../../Assets/imagenes/photo-1454165804606-c3d57bc86b40.jpg'
import taxicons from '../../Assets/tax law.png'
import real from '../../Assets/imagenes/photo-1507679799987-c73779587ccf.jpg'
import realicons from '../../Assets/tax law.png'
import business from '../../Assets/imagenes/photo-1431540015161-0bf868a2d407.jpg'
import businessicons from '../../Assets/business law.png'
import family from '../../Assets/imagenes/photo-1455390582262-044cdead277a.jpg'
import familyicons from '../../Assets/family law.png'
import maritime from '../../Assets/imagenes/photo-1505682634904-d7c8d95cdc50.jpg'
import maritimeicons from '../../Assets/maritimo.png'

const Btngrid = () => {
  return (
    <div className='btngrid-container-0'>
      <div className='btngrid-container-1'>
        <div className='btngrid-immigration-container'>
          <div className='btngrid-immigration-background'>
            <a href='#visas'><img src={visas} alt='visas'></img></a>
         </div>
          <div className='btngrid-immigration-text'>
            <a href='#visas'><img src={visasicons} alt='visasicons'></img></a>
            <h1><a href='#visas'>Immigration and Visas</a></h1>
          </div>
        </div>
        <div className='btngrid-tax-container'>
          <div className='btngrid-tax-background'>
            <a href='#tax'><img src={tax} alt='tax'></img></a>
         </div>
         <div className='btngrid-tax-text'>
            <a href='#tax'><img src={taxicons} alt='taxicons'></img></a>
            <h1><a href='#tax'>Tax Law</a></h1>
          </div>
        </div>
      </div>
    <div className='btngrid-container-2'>
        <div className='btngrid-real-container'>
          <div className='btngrid-real-background'>
            <a href='#real'><img src={real} alt='real'></img></a>
          </div>
          <div className='btngrid-real-text'>
            <a href='#real'><img src={realicons} alt='realicons'></img></a>
            <h1><a href='#real'>Real Estate</a></h1>
          </div>
        </div>
        <div className='btngrid-business-container'>
          <div className='btngrid-business-background'>
            <a href='#business'><img src={business} alt='business'></img></a>
          </div>
          <div className='btngrid-business-text'>
            <a href='#business'><img src={businessicons} alt='businessicons'></img></a>
            <h1><a href='#business'>Business Law</a></h1>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Btngrid