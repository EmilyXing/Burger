import React, { Component } from 'react';
import classes from './Backdrop.css';

class Backdrop extends Component {

    render () {
        let toShow = null;

        if(this.props.show) {
            toShow = <div className={classes.Backdrop} onClick={this.props.clicked}></div>
        }

        return toShow;
    }
    
};

export default Backdrop;