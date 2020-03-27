import React, {Component} from 'react';

class NewItem extends Component {
    state = {registeredItem: null};

    submitHandler = (event) => {
        event.preventDefault();
        this.props.addNewItem(this.state);
        
    }

    changeHandler = (event) => {
        this.setState({registeredItem:{content: event.target.value, checked: false}})
    }

    render (){
        return (
            <form onSubmit={this.submitHandler}>
                <input type='text' onChange={this.changeHandler}/>
                <button>Add Item</button>
            </form>
        );
    }
}

export default NewItem;