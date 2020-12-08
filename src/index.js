import React from 'react'
import ReactDom from 'react-dom'
import './App.css'

const BookList = () => {
  //functionality

  //DOM
  return(
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return(
    <article>
      <Img />
      <Title />
      <Author />
    </article>
  )
}

const Img =  () => <img src="https://m.media-amazon.com/images/I/91X6dZem0ZL._AC_UY218_.jpg" alt="" srcset=""/>
const Title = () => <h4>OSMO - DETECTIVE AGENCY - STEM TOY - FOR IPAD OR FIRE TABLET</h4>
const Author = () => <h2>STEMMS</h2>



let root = document.querySelector('#root')

ReactDom.render(<BookList />, root)