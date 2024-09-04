import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcom Visitor",
    };
    console.log(this);
  }

  changeMessage() {
    console.log(this);
    this.setState({
      message: "Thank you for subscribing",
    });
  }
  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </>
    );
  }
}

export default Message;
