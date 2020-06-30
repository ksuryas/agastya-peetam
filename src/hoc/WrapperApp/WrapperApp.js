import React, { useState } from 'react';
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
        <div>
            <Toolbar toggleSideDrawer={sideDrawerToggleHandler} />
            <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
         </div>
    );
};

export default WrapperApp;