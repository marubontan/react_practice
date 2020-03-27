import React, { Component } from 'react';

import Aux from '../hoc/Aux';
import NewItem from '../components/NewItem';
import Items from '../components/Items';

class ToDo extends Component {
    state = {
        registeredItems: [{content: 'hoge', checked: true}]
    }

    addNewItemHandler = (newItem) => {
        console.log(this.state);
        const updatedState = {...this.state};
        updatedState['registeredItems'].push({...newItem['registeredItem']});
        this.setState(updatedState);
        
    }

    render() {
        return (
            <Aux>
                <h1>ToDo</h1>
                <NewItem addNewItem={this.addNewItemHandler} />
                <Items registeredItems={this.state.registeredItems}/>
            </Aux>
        );
    }
}

export default ToDo;