import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getPartidos } from '../reducers'
import PartidoList from '../components/PartidoList'

class PartidoListContainer extends Component {
  render() {
    const {partidos} = this.props
    return (
       <PartidoList partidos={partidos}>
      </PartidoList>
    )
  }
}

PartidoListContainer.propTypes = {
  partidos:PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })).isRequired
}

const mapStateToProps = (state) => {
  return {
    partidos: getPartidos(state)
  }
}

export default connect(mapStateToProps)(PartidoListContainer)
