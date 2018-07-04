import React, { Component } from "react";
class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const id = this.props.id;
    const index = this.props.index;
    return (
      <button
        onClick={() => this.props.onDeleteItem(id, index)}
        style={{
          height: 35,
          flex: 1,
          background: "#F4511E",
          border: "2px solid #fff",
          color: "#fff",
          borderRadius: 5


        }}
      >
        Delete
      </button>
    );
  }
}

export default DeleteButton;
