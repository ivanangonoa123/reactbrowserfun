import React, { Component, PropTypes } from 'react'
import PartidoListContainer from './PartidoListContainer'

export default class App extends Component {

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  setInputValue(val){
    this.refs.title.value = val
  }

  getInputvalue() {
    return this.refs.title.value
  }

  handleClick() {
    this.props.onChange(this.getInputvalue)
  }

  render() {
    return (
      <div>
      <h2>Futbol</h2>

      <input type="text" size="45" ref="title"/>
      <button onClick={this.handleClick}>Add Partido</button>

      <PartidoListContainer />
      </div>
    )
  }
}
