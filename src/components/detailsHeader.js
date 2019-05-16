import React, { Component } from "react";

class Details extends Component {
  state = {};

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <span> {this.props.getName.title}</span>
          </h1>
        </header>
      </div>
    );
  }
}

export default Details;
