import React from 'react'
import './Title.css'

const Title = () => {
  return (
      <div className="w-3 container">
        <div className="title">
          <h1>Recipe Search API</h1>
          <h3>
            In this application, I used Edamam recipe API to access the recipes of tens of thousands of foods. <br/><br/>
            Enter Any sort of food (e.g.: pizza, ice cream, dumpling, etc.) to find the dish you like. <br/><br/>
            <span className="spinner-grow spinner-grow-sm"> </span>
          </h3>
        </div>
      </div>
  )
}

export default Title