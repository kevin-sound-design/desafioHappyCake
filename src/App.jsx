import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Contacto from './views/Contacto'
import Home from './views/Home'
import NotFound from './views/NotFound'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route
          path='/'
          element = {<Home />}
        />
        <Route
          path='/contacto'
          element = {<Contacto />}
        />
        <Route
          path='*'
          element = {<NotFound />}
        />
        
      </Routes>
    </>
  )
}

export default App
