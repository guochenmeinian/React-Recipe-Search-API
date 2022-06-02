import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        {new Date().getFullYear()} Chenmeinian Guo <br />
        Thanks for visiting my page :) <br />
        <a href='https://github.com/guochenmeinian'>My github repository</a>
    </div>
  )
}

export default Footer