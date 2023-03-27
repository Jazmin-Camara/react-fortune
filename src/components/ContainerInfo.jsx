import React from 'react'
import Button from './Button'
import "./styles/ContainerInfo.css"

const ContainerInfo = ( {quote, handleNewQuote} ) => {

    
  return (
    <section className='containerInfo'>
    <h1 className='containerInfo_title'>GALLETAS DE LA FORTUNA</h1>
    <br />
    <br />
    <article className='containerInfo_phrase'>
      <p>{quote.phrase}</p>
    </article>

    <Button handleNewQuote={handleNewQuote}/>
      
    <article className='containerInfo_author'>
      <p>{quote.author}</p>
    </article>

  </section>
  )
}

export default ContainerInfo