import React, { Component } from 'react';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <Toolbar />
                <SideDrawer />
                <main className={classes.Content}>{this.props.children}</main>
            </React.Fragment>
        );
    }
};

export default Layout;