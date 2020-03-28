import React from 'react';

import classes from './Item.module.css';

const item = (props) => {
    const itemStyle = props.checked ? classes.Checked : null;
    return (
        <div className={classes.Item} >
            <div className={classes.Left}>
                <p className={itemStyle}>{props.content}</p>
            </div>
            <div className={classes.Right}>
                <button onClick={() => { props.deleteItem(props.id) }}>Delete</button>
                <button onClick={() => { props.checkItem(props.id) }}>Check</button>
            </div>
        </div>
    )
}

export default item;