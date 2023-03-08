import 'tailwindcss/tailwind.css'
import AppNavbar from './components/AppNavbar/AppNavbar'
import { Routes, Route } from 'react-router-dom'
import Inicio from './components/Inicio/Inicio'
import Sucursales from './components/Sucursales/Sucursales'
import Informacion from './components/Informacion/Informacion'
import Ubicacion from './components/Ubicacion/Ubicacion'

function App () {
  return (
    <div>
      <AppNavbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/Inicio' element={<Inicio />} />
        <Route path='Sucursales' element={<Sucursales />} />
        <Route path='Informacion' element={<Informacion />} />
        <Route path='Ubicacion' element={<Ubicacion />} />
      </Routes>
    </div>
  /*     <div className='App'>
      <header>
        <h1 style={{ fontSize: 24 }}>Welcome to React Router!</h1>
      </header>

      <a href='/'>
        <button className='bg-orange-500 text-white font-bold py-2 px-4 rounded-full'>Home page</button>
      </a>

      <a href='about'>
        <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded-full'>About page</button>
      </a>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </div> */
  )
}

export default App

/*
    <div className='App'>
      //prueba clase tailwind
      <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4'>
        <div className='shrink-0'>
          <img className='h-12 w-12' src={logoChat} alt='ChitChat Logo' />
        </div>
        <div>
          <div className='text-xl font-medium text-black'>ChitChat</div>
          <p className='text-slate-500'>You have a new message!</p>
        </div>
      </div>
      //prueba clase tailwind

      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>

      //prueba clase tailwind
      <h1 className='text-3xl font-bold underline'>
        Hello world!
      </h1>
      //prueba clase tailwind
    </div>
  */
