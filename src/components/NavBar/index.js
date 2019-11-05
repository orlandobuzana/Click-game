import React, { Component } from 'react'
import "./style.css";

class Navbar extends Component {
  

  render() {
    return (
      <div className="jumbotron text-center">
        <h1 >Clicky Game</h1>
        <h4>Click on an image to earn points, but don't click on any more than once!</h4>
        <p></p>
        <h3> {this.props.children} </h3>
        {/* <button onClick={() => this.props.handleReset} type="button" className="btn btn-secondary">Reset</button> */}
      </div>
    )
  }
}
export default Navbar;