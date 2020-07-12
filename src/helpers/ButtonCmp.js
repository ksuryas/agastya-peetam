import React from 'react';
import commonClasses from './commonClasses.module.css';

const ButtonCmp = (props) => {
    return (
        <button 
        type={props.type} 
        className={[props.className, props.otherStyles, commonClasses.DefaultButton].join(' ')} 
        onClick={props.onClick}>
        {props.children}
        </button>
    );
};

export default ButtonCmp;