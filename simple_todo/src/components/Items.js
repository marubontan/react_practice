import React from 'react';

import Item from './Item';

const items = (props) => {
    return (
        props.registeredItems.map((item, i) => {
            return (<Item key={i} content={item.content} checked={item.checked} />)
        })
    )
}

export default items;