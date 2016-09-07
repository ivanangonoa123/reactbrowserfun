import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Grid, Col, Navbar, Nav, NavItem } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const {children} = this.props
    return (
      <Grid>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
          <Link to={`/`}>Futbol</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
        <div className="container">
          {children}
        </div>
        </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
