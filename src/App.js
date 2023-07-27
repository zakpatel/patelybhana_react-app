import React from 'react'
import { Btngrid, Footer, Quotes} from './containers';
import { Article, Biography, Navbar} from './components';
import './App.css'


const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Article />
      </div>
      <Btngrid />
      <Biography />
      <Quotes />
      <Footer />
    </div>
  )
}

export default App