import React from 'react'
import '../../App.css'
function InputForm({inputText, setInputText}) {
  
  return (
    <input className="inputForm" placeholder="Type here smth..." type="text" value={inputText} onChange={e => setInputText(e.target.value)} />
  )
}

export default InputForm  
