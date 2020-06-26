import React, { Component } from 'react';
import classes from './Layout.module.css';
import WrapperApp from '../../../hoc/WrapperApp/WrapperApp';

class Layout extends Component {
 render() {
  return (
    <div className={classes.Layout}>
    <WrapperApp />
    <main className={classes.Content}> 
       {this.props.children}
    </main>
    </div>
     );
   }
};

export default Layout;