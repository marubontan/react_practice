import React from 'react';
import '../App.css'

const centerColumn = () => {
    return <div className="card postSize">
        <div className="card-body horizontalFlex">
            <img className="floatLeft" src="https://img.icons8.com/color/48/000000/user-male.png" />
            <form className="verticalFlex" action="/" method="post">
                <input type="text" name="postContent" />
                <button className="horizontalFlexEnd">post</button>
            </form>
        </div>
    </div>
}

export default centerColumn;