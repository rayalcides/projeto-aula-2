import './App.css'
import Lista from './Componentes/Lista'
import Contador from './Componentes/Contator'
import Eventos from './Componentes/Eventos'
import Repositorios from './Componentes/Repositorios'

function App() {

  return (
    <div className="App">
      <Lista/>
      <Eventos/>
      <Contador/>
      <Repositorios/>
    </div>
  )
}

export default App
