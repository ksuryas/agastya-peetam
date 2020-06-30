import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import ContactBar from '../../UI/ContactBar/ContactBar';

const toolbar = (props) => (
<div className={classes.Toolbar}>
    <DrawerToggle clicked={props.toggleSideDrawer} />
    <div>
    <Logo />
    </div>
      
    <nav className={classes.DesktopOnly}>
      <ContactBar />
      <NavigationItems />
    </nav>
</div>
);

export default toolbar;