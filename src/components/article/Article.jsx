import React from 'react'
import './Article.css'

const Article = () => {
  return (
    <div className='article'>
      <div className='article-content'>
        <h1 className='header-text'>Patel & Bhana Legal Services</h1>
        <p className='paragraph text'>Patel & Bhana is a licensed Panama law firm specializing in immigration, real estate law, relocation services, citizenship programs, as well as corporate law.</p>
        <div className='article-button'>
          <button type='button' className='article-quote'>
            Get a free quote →
          </button>
        </div>
      </div>
    </div>
  )
}

export default Article;