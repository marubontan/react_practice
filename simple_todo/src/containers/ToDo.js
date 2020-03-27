import React, { Component } from 'react';

import Aux from '../hoc/Aux';
import NewItem from '../components/NewItem';
import Items from '../components/Items';

class ToDo extends Component {
    state = {
        registeredItems: [{content: 'hoge', checked: true}]
    }
    render() {
        return (
            <Aux>
                <h1>ToDo</h1>
                <NewItem />
                <Items registeredItems={this.state.registeredItems}/>
            </Aux>
        );
    }
}

export default ToDo;