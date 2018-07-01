import React, { Component } from "react";
class HeaderComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header
        style={{
          backgroundColor: "#1768e8",
          marginTop: 0,
          padding: 2,
          paddingLeft: 20
        }}
      >
        <h1
          style={{
            color: "#fff",
            marginTop: 15,
            marginBottom: 15,
            fontSize: 25
          }}
        >
          TODO LIST ::
        </h1>
      </header>
    );
  }
}

export default HeaderComponents;
