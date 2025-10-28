import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormularioTareas from './components/FormularioTarea.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className='container py-5'>
      <h1 className='text-light'>Bienvenidos</h1>



      <FormularioTareas></FormularioTareas>
    </main>
    </>
  )
}

export default App
