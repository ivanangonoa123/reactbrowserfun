import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {addPartido} from '../actions'
import AddPartido from '../components/AddPartido'

class AddPartidoContainer extends Component {
  constructor(props){
    super(props)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(values) {
   //this.props.storeAddPartido(...values)
  }

  render() {
    const {partidos} = this.props
    return (
      <AddPartido onFormSubmit={this.handleFormSubmit}/>
    )
  }
}

AddPartidoContainer.propTypes = {
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  /*  storeAddPartido:(title, date, polla) => {
      dispatch(addPartido(title, date, polla))
    }*/
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPartidoContainer)
