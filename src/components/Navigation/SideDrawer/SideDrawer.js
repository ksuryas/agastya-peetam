import React from 'react';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
let attachedClasses = [classes.SideDrawer, classes.Close];
if(props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
}

return (
<div>  
    <Backdrop show={props.open} clicked={props.closed} />
    <div className={attachedClasses.join(' ')} onClick={props.closed}>
        <button className={classes.CloseButton} onClick={props.closed}>
        <i className="fa fa-close" />
        </button>
        
        <div className={classes.Logo}>
            <Logo />
        </div>
   
    <nav>
        <NavigationItems />
     </nav>
    </div>
    </div>
 );
};

export default sideDrawer;