import React from 'react'
import './biography.css'
import bioimage from '../../Assets/hass.png'

const Biography = () => {
  return (
    <div className='biography-container'>
      <div className='biography-image'>
        <img src={bioimage} alt='hashim'></img>
      </div>
    <div className='biography-content'>
      <div className='biography-title'>
        <h1>Our Founder</h1>
      </div>
      <div className='biography-text'>
        <p>Hassim has a Degree in Law and Political sciences from the Latin University in Panama.

            He has worked for several International Firms and Multinational Companies over the past twelve years.<br></br><br></br>

            He has experience in the analysis and execution of tax structures, applying Double Taxation Treaties signed by the Republic of Panama, in addition he has an expertise in Panamanian Corporate and Real Estate law.

            Over the last seven years Hassim has closed approximately 100 Real Estate transaction for clients.

            Hassim speaks fluently Spanish and English. </p>
        <div className='biography-quote'>
        <button type='button-2' className='biography-button'>Get a free quote →</button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Biography