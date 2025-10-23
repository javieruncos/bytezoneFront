import './App.css'
import Menu from './components/common/Menu'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'

function App() {

  return (
    <>
      <div className='App'>
        <Menu></Menu>
       {/* <Home></Home> */}
       <Nosotros></Nosotros>
      </div>
    </>
  )
}

export default App
