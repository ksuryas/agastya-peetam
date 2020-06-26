import React, { useState } from 'react';
import classes from './WrapperApp.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const WrapperApp = () => {
    let [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    };
    
   const sideDrawerToggleHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    };
    
    return (
        <div className={classes.WrapperApp}>
            <Toolbar toggleSideDrawer={sideDrawerToggleHandler} />
            <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
         </div>
    );
};

export default WrapperApp;