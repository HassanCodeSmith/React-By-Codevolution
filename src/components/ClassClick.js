import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log("Click the button");
    console.log(this);
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler.bind(this)}>Click</button>
      </div>
    );
  }
}

export default ClassClick;
