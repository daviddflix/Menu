import img from  './App.css'
import portada from './assets/portada.jpg'
import pastas from './assets/pastas.jpg'
import salsas from './assets/salas2.jpg'
import extras from './assets/extras2.jpg'
import doc from './assets/pdf.pdf'

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
