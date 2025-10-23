import './App.css'
import Menu from './components/common/Menu'
import Contacto from './pages/Contacto'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'

function App() {

  return (
    <>
      <div className='App'>
        <Menu></Menu>
       {/* <Home></Home> */}
       {/* <Nosotros></Nosotros> */}
       <Contacto></Contacto>
      </div>
    </>
  )
}

export default App
