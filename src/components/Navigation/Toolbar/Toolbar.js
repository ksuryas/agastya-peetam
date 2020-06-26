import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import MiniCntBar from '../../UI/MiniCntBar/MiniCntBar';

const toolbar = (props) => (
<div className={classes.Toolbar}>
    <DrawerToggle clicked={props.toggleSideDrawer} />
    <div>
    <Logo logoStyling={classes.LogoImg} />
    </div>  
    <nav className={classes.DesktopOnly}>
      <MiniCntBar />
      <NavigationItems />
    </nav>
</div>
);

export default toolbar;