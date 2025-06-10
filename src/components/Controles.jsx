const Controles = ({ onGol, Amarillarda, Rojarda, Reset }) => {
  return (
    <div className="controles">
      <div>
        <h3>Local</h3>
        <button onClick={() => { onGol('local') }}>⚽ Gol</button>
        <button onClick={() => { Amarillarda('local') }}>🟨 Amarilla</button>
        <button onClick={() => { Rojarda('local') }}>🟥 Roja</button>
      </div>
      <div>
        <h3>Visitante</h3>
        <button onClick={() => { onGol('visitante') }}>⚽ Gol</button>
        <button onClick={() => { Amarillarda('visitante') }}>🟨 Amarilla</button>
        <button onClick={() => { Rojarda('visitante') }}>🟥 Roja</button>        
      </div>
    <button onClick={() => {Reset()}}>Reset</button>
    </div>
  )
}

export default Controles