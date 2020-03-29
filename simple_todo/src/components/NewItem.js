import React, { Component } from 'react';

class NewItem extends Component {
    state = { registeredItem: null };

    submitHandler = (event) => {
        event.preventDefault();
        this.props.addNewItem(this.state);
        this.setState({registeredItem: ''});
        this.todo.value = '';
    }

    changeHandler = (event) => {
        this.setState({
            registeredItem: {
                id: this.props['id'],
                content: event.target.value,
                checked: false
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input ref={(ref) => {this.todo = ref}} type='text' onChange={this.changeHandler} />
                <button>Add Item</button>
            </form>
        );
    }
}

export default NewItem;