import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = () => (
    <nav className={classes.NavigationItems}>
    <NavigationItem title="Shri Agastya Peetam Homepage" link="/" exact>About Us</NavigationItem>
    <NavigationItem title="About Swamiji" link="/about-swamiji/">Shri Swami Sugunananda Gayathri </NavigationItem>
    <NavigationItem title="Gayathri Maha Purashcharana" link="/about-gayathri-maha-purashcharana/">Gayathri Maha Purascharana</NavigationItem>
    <NavigationItem title="Deergha Sathra Yagam" link="/about-deergha-sathra-yagam/">Deergha Sathra Yagam</NavigationItem>
    <NavigationItem title="Donate here" link="/donate/">Donate</NavigationItem>
   </nav>
);

export default navigationItems;