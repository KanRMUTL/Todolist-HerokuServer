import React, { Component } from 'react';
class DeleteButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const id = this.props.id;
        return (
            <button onClick={() => this.props.onDeleteItem(id)}>
                Delete
            </button>
        );
    }
}

export default DeleteButton;