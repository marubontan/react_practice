import React from 'react';

import Aux from '../hoc/Aux';

const item = (props) => {
    return (
        <Aux>
            <li>{props.content}</li>
            <button onClick={() => {props.deleteItem(props.id)}}>Delete</button>
            <button onClick={() => {props.checkItem(props.id)}}>Check</button>
        </Aux>
    )
}

export default item;