import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import PartidoListContainer from './PartidoListContainer'
import AddPartidoContainer from './AddPartidoContainer'

import { Col } from 'react-bootstrap';

class IndexPage extends Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
      <Col xs={4} md={8} lg={4}>
        <AddPartidoContainer />
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

    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
