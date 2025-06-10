import { useState } from 'react'
import './App.css'
import Controles from './components/Controles'
import Display from './components/Display'

function App() {
  const [partido, setPartido] = useState({
    golesLocal: 0,
    golesVisitante: 0
  })

  const onGol = (equipo) => {
    if(equipo==='local'){
    setPartido({ ...partido, golesLocal: partido.golesLocal + 1 })
    }else{
    setPartido({ ...partido, golesVisitante: partido.golesVisitante + 1 })}
  }
  const [amarilla, setAmarilla] = useState({
    amarillaLocal: 0,
    amarillaVisitante: 0
  })

  const Amarillarda = (equipo) => {
    if(equipo==='local'){
    setAmarilla({ ...amarilla, amarillaLocal: amarilla.amarillaLocal + 1 })
    }else{
    setAmarilla({ ...amarilla, amarillaVisitante: amarilla.amarillaVisitante + 1 })}
  }
  

  return (
    <div className='container'>
      <h1>Partido</h1>
      <Controles onGol={onGol} Amarillarda={Amarillarda} />
      <Display partido={partido} amarilla={amarilla} />
    </div>
  )
}

export default App
