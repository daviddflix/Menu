import img from  './App.css'
import portada from './assets/portadaNov.jpg'
import pastas from './assets/pastasNov.jpg'
import salsas from './assets/salsas2.jpg'
import extras from './assets/extrasNov.jpg'
import doc from './assets/carta.pdf'
import menu from './assets/menu.pdf'

function App() {
  return (
    <div className="App">
      <embed src={menu} type="application/pdf" className='menu' />
    </div>
  )
}

export default App
