import React, { Component } from 'react';

import Aux from '../hoc/Aux';
import NewItem from '../components/NewItem';
import Items from '../components/Items';
import classes from '../components/Items.module.css';

class ToDo extends Component {
    state = {
        registeredItems: [],
        maxId: 0
    }

    addNewItemHandler = (newItem) => {
        const updatedState = { ...this.state };
        updatedState['registeredItems'].push({ ...newItem['registeredItem'] });
        updatedState['maxId'] = newItem['registeredItem']['id'];
        this.setState(updatedState);
    }

    deleteItemHandler = (deleteTargetItemId) => {
        const updatedState = this.state['registeredItems'].filter((item) => {
            return item['id'] !== deleteTargetItemId
        });

        this.setState({ registeredItems: updatedState });
    }

    checkItemHandler = (checkTargetItemId) => {
        const updatedState = this.state['registeredItems'].map((item) => {
            if (item.id === checkTargetItemId) {
                item.checked = true;
            }
            return item;
        });
        this.setState({ registeredItems: updatedState });
    }

    render() {
        return (
            <Aux>
                <h1>ToDo</h1>
                <NewItem
                    addNewItem={this.addNewItemHandler}
                    id={this.state['maxId'] + 1}
                />
                <div className={classes.Items}>
                    <Items
                        registeredItems={this.state.registeredItems}
                        deleteItem={this.deleteItemHandler}
                        checkItem={this.checkItemHandler}
                    />
                </div>
            </Aux>
        );
    }
}

export default ToDo;