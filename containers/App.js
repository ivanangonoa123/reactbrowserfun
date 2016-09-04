import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import PartidoListContainer from './PartidoListContainer'
import AddPartido from '../components/AddPartido'
import {addPartido} from '../actions'
import { Col } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(values) {
   this.props.storeAddPartido(...values)
  }

  render() {
    return (
      <Col xs={4} md={8} lg={4} lgOffset={6} mdOffset={6}>
      <h2>Futbol</h2>
        <AddPartido onFormSubmit={this.handleFormSubmit}/>
        <PartidoListContainer />
      </Col>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeAddPartido:(title, date, polla) => {
      dispatch(addPartido(title, date, polla))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
