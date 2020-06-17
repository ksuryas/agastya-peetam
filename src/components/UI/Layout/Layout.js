import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../../Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';
import Aux from '../Auxilliary/Auxilliary';

class Layout extends Component {
state = {
    showSideDrawer: false
};

sideDrawerClosedHandler = () => {
this.setState({showSideDrawer: false});
};

sideDrawerToggleHandler = () => {
this.setState((prevState) => {
    return {showSideDrawer: !prevState.showSideDrawer};
});
};

render() {
    return (
<Aux>
<Toolbar toggleSideDrawer={this.sideDrawerToggleHandler} />
<SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
<main className={classes.Content}>
    {this.props.children}
</main>
</Aux>

);
}
};

export default Layout;