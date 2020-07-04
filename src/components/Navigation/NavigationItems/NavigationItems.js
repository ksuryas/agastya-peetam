import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = () => (
    <nav className={classes.NavigationItems}>
    <NavigationItem title="" link="/"></NavigationItem>
    <NavigationItem title="" link="/" exact>About Us</NavigationItem>
    <NavigationItem title="" link="/about-swamiji/">Shri Swami Sugunananda Gayathri </NavigationItem>
    <NavigationItem title="" link="/about-gayathri-maha-purashcharana/">Gayathri Maha Purascharana</NavigationItem>
    <NavigationItem title="" link="/about-deergha-sathra-yagam/">Deergha Sathra Yagam</NavigationItem>
    <NavigationItem title="" link="/donate/">Donate</NavigationItem>
   </nav>
);

export default navigationItems;