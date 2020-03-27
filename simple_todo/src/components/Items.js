import React from 'react';

import Item from './Item';

const items = (props) => {
    console.log(props)
    return (
        <ul>
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
        </ul>
    )
}

export default items;