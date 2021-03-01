import { useState, useEffect, useRef } from 'react'
import InputName from './InputName.jsx'
import DisplayName from './DisplayName.jsx'
function App() {

  const [name, setName] = useState("Bilaal")
  const [color, setColor] = useState("red")

  const greetingRef = useRef();

  useEffect(() => {
      document.body.style.color = color;
  }, [color])

  function changeName(event) {
      setName(event.target.value)
  }

  function changeColor(event) {
      setColor(event.target.value)
  }
  return (
      <div className="app">
          <DisplayName username={name} />
          <InputName onChangeName={changeName}  />
          <input  onChange={changeColor} type="text" placeholder="Choose a color" />
  </div> )



}

export default App;
