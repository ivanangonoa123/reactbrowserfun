import React, { Component, PropTypes } from 'react'
import {findDOMNode} from 'react-dom'
import { Button, FormGroup, FormControl, ControlLabel, Input } from 'react-bootstrap';

export default class AddPartido extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setInputValue(val){
    this.refs.title.value = val
  }

  getInputvalue() {
    let title = findDOMNode(this.refs.title).value
    let date = findDOMNode(this.refs.date).value
    let polla = findDOMNode(this.refs.polla).value
    let values = [title, date, polla]
    return values
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onFormSubmit(this.getInputvalue())
  }

  render() {
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
      <FormGroup>
              <h2>Add Partido</h2>
              <div className="item">
              <ControlLabel>Title</ControlLabel>
              <FormControl type="text" size="45" ref="title"/>
              </div>
              <div className="item">
              <ControlLabel>Date</ControlLabel>
              <FormControl type="text" size="45" ref="date"/>
              </div>
              <div className="item">
              <ControlLabel>Polla</ControlLabel>
              <FormControl type="number" size="45" ref="polla"/>
              </div>
              <br/>
              <Button type="submit" bsStyle="primary">Add Partido</Button>
      </FormGroup>
      </form>
      </div>
    )

  }

  }

  AddPartido.propTypes = {
    onFormSubmit: PropTypes.func.isRequired
  }
