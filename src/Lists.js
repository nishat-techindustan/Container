import React from 'react';

const Lists = (props) => {
    return (
        <div>
            <h1>Your bodygaurd is : {props.match.params.name}</h1>
        </div>
    )
}

export default Lists;