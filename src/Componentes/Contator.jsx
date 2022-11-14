import { useState } from 'react'

function Contador() {
    const [contador, setContador] = useState(0)

    function soma() {
        setContador(contador + 1)
      }
    
      function diminui() {
        setContador(contador - 1)
      }

    return(
     <div>
        <button onClick={diminui}>-</button>
        <h2>{contador}</h2>
        <button onClick={soma}>+</button>
      </div>
    )
}

export default Contador