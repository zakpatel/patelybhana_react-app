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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla enim lacus, pharetra vitae quam vitae, cursus pharetra nunc. Maecenas eu pretium lectus. Nunc finibus, libero sit amet facilisis porta, est enim vehicula urna, sed lobortis lorem libero a turpis. Proin est dolor, ultrices a iaculis et, dictum quis justo.<br></br>
          <br></br>
            Donec nec tortor magna. Sed pellentesque tellus in lectus rutrum ullamcorper. Aliquam vehicula et massa eu faucibus. Mauris dictum luctus molestie. Duis sit amet felis nisi. Praesent at nisl luctus, gravida neque eu, mattis erat.</p>
        <div className='biography-quote'>
        <button type='button-2' className='biography-button'>Get a free quote →</button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Biography