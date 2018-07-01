import React, { Component } from "react";
class ListItem extends Component {
  render() {
    let todos = this.props.todos; // สร้างตัวแปรมาไม่ให้งงตอนวนลูป
    return (
      <React.Fragment>
        {todos.map((item, index) => (
          <div
            onChange={() => this.props.onCheckbox(index, item.id)}
            key={item.id}
            style={{
              backgroundColor: "#a9c8f9",
              borderColor: "#ccc",
              borderWidth: 1,
              borderStyle: "solid",
              borderRadius: 5,
              margin: 2,
              padding: 5,
              paddingTop: 10,
              paddingBottom: 19
            }}
          >
            <input type="checkbox"  checked={item.complete}/> {item.name}
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default ListItem;
