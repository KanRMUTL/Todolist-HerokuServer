import React, { Component } from "react";
import DeleteButton from "./DeleteButton";
class ListItem extends Component {
  render() {
    let todos = this.props.todos; // สร้างตัวแปรมาไม่ให้งงตอนวนลูป
    return (
      <React.Fragment>
        {todos.map((item, index) => (
          <div
            key={item.id}
            style={{
              backgroundColor: "#448AFF",
              borderColor: "rgb(68, 137, 255)",
              borderWidth: 1,
              borderStyle: "solid",
              borderRadius: 5,
              margin: 2,
              padding: 5,
              paddingTop: 10,
              paddingBottom: 19,
              fontSize: 25,
              color: "#fff"
            }}
          >
            <input
              type="checkbox"
              checked={item.complete}
              onChange={() => this.props.onCheckbox(index, item.id)}
            />
            {item.complete ? <s>{item.name}</s> : item.name}
            <DeleteButton
              id={item.id}
              index={index}
              onDeleteItem={this.props.onDeleteItem}
            />
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default ListItem;
