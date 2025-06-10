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

    const [roja, setRoja] = useState({
    rojaLocal: 0,
    rojaVisitante: 0
  })

  const Rojarda = (equipo) => {
    if(equipo==='local'){
    setRoja({ ...roja, rojaLocal: roja.rojaLocal + 1 })
    }else{
    setRoja({ ...roja, rojaVisitante: roja.rojaVisitante + 1 })}
  }

   const Reset = () =>{
    partido.golesLocal=0,
    partido.golesVisitante=0,
    amarilla.amarillaLocal=0,
    amarilla.amarillaVisitante=0,
    roja.rojaLocal=0,
    roja.rojaVisitante=0
  }  

  return (
    <div className='container'>
      <h1>Partido</h1>
      <Controles onGol={onGol} Amarillarda={Amarillarda} Rojarda={Rojarda} Reset={''}/>
      <Display partido={partido} amarilla={amarilla} roja={roja}/>
    </div>
  )
}

export default App
