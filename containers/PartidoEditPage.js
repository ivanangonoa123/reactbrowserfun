import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getPartidos } from '../reducers'
import { withRouter } from 'react-router'
import { getPartido } from '../reducers'

class PartidoEditPage  extends Component {

  componentDidMount() {

  }

  render() {
    const {partido} = this.props

    return (
      <div>
      <h3>{partido.title}</h3>
      <p>{partido.date}</p>
      </div>
    )
  }

}

const mapStateToProps = (state, {params}) => {
  return {
    partido: getPartido(state, params.id)
  }
}

PartidoEditPage = withRouter(connect(mapStateToProps)(PartidoEditPage))

export default PartidoEditPage
