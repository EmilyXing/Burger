import React, { Component } from 'react';
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css';

const controls = [
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'}
];
    

class BuildControls extends Component {
    render () {
        const controlList = controls.map((control) => {
    
            return <BuildControl 
                key={control.label} 
                label={control.label} 
                add={() => this.props.addIngredient(control.type)}
                rmv={() => this.props.rmvIngredient(control.type)}
                disabled={!this.props.disabled[control.type]}
                />
        })
    
        //console.log(controlList);
    
        return (
            <div className={classes.BuildControls}>
                <p>Total Price <strong>{this.props.price.toFixed(2)}</strong>$</p>
                {controlList}
                <button 
                    className={classes.OrderButton}
                    disabled={!this.props.purchasable}
                    onClick={this.props.ordered}>ORDER NOW</button>
            </div>
        );
    }
};

export default BuildControls;