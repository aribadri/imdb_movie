import React from 'react'
import '../../App.css'

function Button({setInputText, fetching}) {
  return (
    <button className="btn"
    onClick={fetching}>
      <p className="btnText">Search</p>
      </button>
  )
}

export default Button
