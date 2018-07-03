import React, { Component } from "react";
import HeaderComponents from "./components/HeaderComponents";
import FormComponents from "./components/FormComponents";
import List from "./components/List";
import Axios from "axios";

const URL = "https://condom-server.herokuapp.com"; //Read only

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      message: ""
    };
    //So not understand
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmitMessage = this.onSubmitMessage.bind(this);
    this.onCheckbox = this.onCheckbox.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
  }

  componentDidMount = () => {
    Axios.get(URL + "/todos").then(response => {
      console.log(response);
      this.setState({ todos: response.data });
    });
  };

  onChangeMessage(e) {
    this.setState({ message: e.target.value });
  }

  onSubmitMessage(e) {
    // ป้องกันเปลี่ยนหน้า
    e.preventDefault();
    Axios.post(URL + "/todos", {
      name: this.state.message,
      complete: false
    }).then(response => {
      let oldState = this.state.todos;
      oldState.push(response.data);
      this.setState({ todos: oldState });
    });
  }

  onCheckbox(index, id) {
    let check = this.state.todos[index].complete;
    Axios.patch(URL + "/todos/" + id, { complete: !check }).then(response => {
      let oldState = this.state.todos;
      oldState[index].complete = !check;
      this.setState({ todos: oldState });
    });
  }

  onDeleteItem(id){
    Axios.delete(URL + "/todos/" + id).then(response => {
      let oldState = this.state.todos;
      oldState.get(response.data)
      this.setState({ todos: oldState });
    });
  }
  render() {
    return (
      <div
        style={{
          borderColor: "#1768e8",
          borderWidth: 2,
          borderStyle: "solid",
          borderRadius: 4,
          width: 1024,
          margin: "auto",
          marginTop: 20
        }}
      >
        <HeaderComponents />
        <List 
          todos={this.state.todos} 
          onCheckbox={this.onCheckbox}
          onDeleteItem={this.onDeleteItem}/>
        <FormComponents
          onChangeMessage={this.onChangeMessage}
          onSubmitMessage={this.onSubmitMessage}
        />
      </div>
    );
  }
}

export default App;
