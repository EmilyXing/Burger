import React from 'react';
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css';

const controls = [
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'}
];
    

const buildControls = (props) => {
 
    const controlList = controls.map((control) => {
    
        return <BuildControl 
            key={control.label} 
            label={control.label} 
            add={() => props.addIngredient(control.type)}
            rmv={() => props.rmvIngredient(control.type)}
            disabled={!props.disabled[control.type]}
            />
    })

    //console.log(controlList);

    return (
        <div className={classes.BuildControls}>
            <p>Total Price <strong>{props.price.toFixed(2)}</strong>$</p>
            {controlList}
            <button 
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}>ORDER NOW</button>
        </div>
    )

};

export default buildControls;