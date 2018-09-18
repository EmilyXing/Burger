import React from 'react';
import classes from './OrderSummary.css';

const orderSummary = (props) => {
    const style = {
        textTransform: 'capitalize'
    };

    const orderList = Object.keys(props.ingredients).map(
        igKey => <li key={igKey}>
            <span style={style}>{igKey}</span> : {props.ingredients[igKey]}</li>
    );

    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>ingredients: </p>
            <ul>
                {orderList}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <button 
                className={[classes.Button, classes.Danger].join(' ')}
                onClick={props.purchaseCanceled}>
                CANCEL
            </button>

            <button 
                className={[classes.Button, classes.Success].join(' ')}
                onClick={props.purchaseContinued}>
                CONTINUE
            </button>
        </React.Fragment>
    );
};

export default orderSummary;