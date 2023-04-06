import React from 'react';

import classes from './Card.module.css';

const Card1 = props => {
    return (
        <div className={`${classes.card} ${props.className}`}>
            {props.children}
        </div>
    );
};

export default Card1;