import img from  './App.css'
import portada from './assets/portadaNov.jpg'
import pastas from './assets/pastasNov.jpg'
import salsas from './assets/salsas2.jpg'
import extras from './assets/extrasNov.jpg'
import doc from './assets/carta.pdf'

function App() {
  return (
    <div className="App">
       <a href={doc} download={doc} className="btn">Descargar</a>
       <img className='img' src={portada} alt="portada" />
       <img className='img' src={pastas} alt="pastas" />
       <img className='img' src={salsas} alt="salsas" />
       <img className='img' src={extras} alt="extras" />
    </div>
  )
}

export default App
