import React from 'react';

import Item from './Item';
import Aux from '../hoc/Aux';

const items = (props) => {
    return (
        <Aux>
            {props.registeredItems.map((item) => {
                return (
                    <Item
                        key={item.id}
                        id={item.id}
                        content={item.content}
                        checked={item.checked}
                        deleteItem={props.deleteItem}
                        checkItem={props.checkItem}
                    />
                )
            })
            }
        </Aux>
    )
}

export default items;