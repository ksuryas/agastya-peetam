import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = () => (
    <nav className={classes.NavigationItems}>
    <NavigationItem title="Agastya Peetam Homepage" link="/" exact>Home Page</NavigationItem>
    <NavigationItem title="About Swamiji" link="/about-swamiji/">About Sri Sugunanda Gayathri Swamiji</NavigationItem>
    <NavigationItem title="Books Written by Swamiji" link="/books-written-by-swamiji/">Books Written by Swamiji</NavigationItem>
    <NavigationItem title="Gayathri Maha Purashcharana" link="/about-gayathri-maha-purashcharana/">About Gayathri Maha Purashcharana</NavigationItem>
    <NavigationItem title="Deergha Sathra Yagam" link="/about-deergha-sathra-yagam/">About Deergha Sathra Yagam</NavigationItem>
    <NavigationItem title="Donate here" link="/donate/">Donate</NavigationItem>
    <NavigationItem title="Contact Us" link="/contact-us/">Contact Us</NavigationItem>
    </nav>
);

export default navigationItems;