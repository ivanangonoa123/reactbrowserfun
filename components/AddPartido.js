import React, { Component, PropTypes } from 'react'

export default class AddPartido extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  setInputValue(val){
    this.refs.title.value = val
  }

  getInputvalue() {
    let values = [this.refs.title.value, this.refs.date.value, this.refs.polla.value]
    return values
  }

  handleClick() {
    this.props.onFormSubmit(this.getInputvalue())
  }

  render() {
    return(
      <div>
              <h2>Add Partido</h2>
              <div className="item">
              <label>Title</label>
              <input type="text" size="45" ref="title"/>
              </div>
              <div className="item">
              <label>Date</label>
              <input type="text" size="45" ref="date"/>
              </div>
              <div className="item">
              <label>Polla</label>
              <input type="number" size="45" ref="polla"/>
              </div>
              <button onClick={this.handleClick}>Add Partido</button>
      </div>
    )

  }

  }

  AddPartido.propTypes = {
    onFormSubmit: PropTypes.func.isRequired
  }
