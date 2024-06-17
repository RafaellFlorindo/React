import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
function App() {
  const [num, setNum] = useState("")
  const [dec, setDec] = useState(0)
  function con(){
    const decCon = setDec(parseInt(num, 2));
  }
  return (
    <>
        <h1>Converter Número Binário para Decimal </h1>

        <input type="text" placeholder="Digite aqui..." onChange={(e) => setNum(e.target.value)} />

        <button id='botao' type="button" onClick={con}>Converter</button>

        <p>{dec}</p>
    </>
  )
}
export default App
