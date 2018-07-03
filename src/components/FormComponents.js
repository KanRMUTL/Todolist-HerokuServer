import React, { Component } from "react";
class FormComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          margin: 7,
          background: "#BBDEFB"
        }}
      >
        <form onSubmit={this.props.onSubmitMessage} style={{ display: "flex" }}>
          <input
            type="text"
            style={{
              flex: 9,
              height: 30,
              borderRadius: 5,
              border: "1px solid rgb(49, 132, 214)"
            }}
            onChange={this.props.onChangeMessage}
            value={this.props.message}
          />
          <button
            type="submit"
            style={{
              height: 35,
              flex: 1,
              background: "#fff",
              border: "2px solid #3662db",
              borderRadius: 5
            }}
          >
            <strong>Add to List</strong>
          </button>
        </form>
      </div>
    );
  }
}

export default FormComponents;
