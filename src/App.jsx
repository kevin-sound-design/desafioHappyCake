import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Contacto from './views/Contacto'
import Home from './views/Home'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route
          path='/'
          element = {<Home />}
        />
      </Routes>
    </>
  )
}

export default App
