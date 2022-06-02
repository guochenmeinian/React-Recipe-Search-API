import React from 'react'

const Alert = ({alert}) => {
  return (
    <div>
        <h4 style={{paddingBottom:'15px' , color:'white', display:'inline-block', fontSize:'20px', fontFamily:'monospace'}}>{alert}</h4>
    </div>
  )
}

export default Alert