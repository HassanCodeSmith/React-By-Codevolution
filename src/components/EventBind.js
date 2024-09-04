import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    // this.eventHandler = this.eventHandler.bind(this);
  }

  //   eventHandler() {
  //     this.setState(() => ({
  //       message: "Goodbye",
  //     }));
  //   }

  eventHandler = () => {
    this.setState({
      message: "goodbye",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.eventHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.eventHandler()}>Click</button> */}
        {/* <button onClick={this.eventHandler}>Click</button> */}
        <button onClick={this.eventHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
