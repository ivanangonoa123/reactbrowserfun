import React, { Component, PropTypes } from 'react'

export default class PartidoList extends Component {
  render() {
    const {partidos} = this.props

    const hasPartidos = partidos.length > 0

    const nodes = !hasPartidos ?
    <em>No partidos!</em> :
    partidos.map( partido =>
      <div key={partido.id}>      
      <h3>{partido.title}</h3>
      <p>{partido.date}</p>
      </div>
    )

    return (
      <div>
      <h2>Partidos</h2>
      <div>{nodes}</div>
      </div>
    )
  }
}

PartidoList.propTypes = {
partidos: PropTypes.array

}
