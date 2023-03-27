import React from 'react'
import "./styles/button.css"

const Button = ( {handleNewQuote} ) => {
  return (
    <button className='button' onClick={handleNewQuote}>Ver otro</button>
  )
}

export default Button