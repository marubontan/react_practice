import React from 'react';

import classes from './Item.module.css';

const item = (props) => {
    return (
        <div className={classes.Item}>
            <div className={classes.Left}>
                {props.content}
            </div>
            <div className={classes.Right}>
                <button onClick={() => { props.deleteItem(props.id) }}>Delete</button>
                <button onClick={() => { props.checkItem(props.id) }}>Check</button>
            </div>
        </div>
    )
}

export default item;