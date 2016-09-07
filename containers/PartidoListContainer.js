import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {getPartidos } from '../reducers'
import {fetchPartidos} from '../actions'
import PartidoList from '../components/PartidoList'

class PartidoListContainer extends Component {

  componentDidMount() {
    const {dispatch} = this.props
    debugger;
    dispatch(fetchPartidos())
  }


  render() {
    const {partidos} = this.props
    return (
       <PartidoList partidos={partidos || []}>
      </PartidoList>
    )
  }
}

PartidoListContainer.propTypes = {
  partidos:PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })).isRequired,

  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    partidos: getPartidos(state)
  }
}

export default connect(mapStateToProps)(PartidoListContainer)
