import React from 'react'
import ReactDom from 'react-dom'

const Index = () => {
  return(
    <div>
      INDEX.JS
    </div>
  )
}

let root = document.querySelector('#root')

ReactDom.render(<Index />, root)