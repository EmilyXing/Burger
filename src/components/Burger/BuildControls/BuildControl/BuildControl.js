import React, { Component } from 'react';
import classes from './BuildControl.css';

class BuildControl extends Component {
    render() {
        return (
            <div>
                <div className={classes.Label}>{this.props.label}</div>
                <button
                    className={classes.More}
                    onClick={this.props.add}>More</button>
                <button
                    className={classes.Less}
                    onClick={this.props.rmv}
                    disabled={this.props.disabled}>Less</button>
            </div>
        );
    }
};

export default BuildControl;