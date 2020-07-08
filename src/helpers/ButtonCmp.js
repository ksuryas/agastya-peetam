import React from 'react';

const ButtonCmp = (props) => {
    return <button type={props.type} className={props.className} onClick={props.onClick}>{props.children}</button>
};

export default ButtonCmp;