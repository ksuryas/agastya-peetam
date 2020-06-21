import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
<div className={classes.Toolbar}>
    <DrawerToggle clicked={props.toggleSideDrawer} />
    <div className={classes.Logo}>
    <Logo />
    </div>  
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
</div>
);

export default toolbar;