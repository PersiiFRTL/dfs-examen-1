const Display = ({ partido, amarilla}) => {
  return (
    <div className="display">    
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Local</th>
            <th>Visitante</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">⚽</th>
            <td>{partido.golesLocal}</td>
            <td>{partido.golesVisitante}</td>
          </tr>
          <tr>
            <th scope="row">🟨</th>
            <td>{amarilla.amarillaLocal}</td>
            <td>{amarilla.amarillaVisitante}</td>
          </tr>
          <tr>
            <th scope="row">🟥</th>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Display