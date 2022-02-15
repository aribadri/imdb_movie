import React from 'react'
import '../../App.css'

function Button({setInputText, fetching}) {
  return (
    <button className="btn"
    onClick={fetching}>
      <div className="btnText">Search</div>
      </button>
  )
}

export default Button
