import React, { Component } from 'react';
import classes from './OrderSummary.css';

class OrderSummary extends Component {

    // // for test
    // componentWillUpdate() {
    //     console.log('summary updated');
    // }

    render () {
        const style = {
            textTransform: 'capitalize'
        };
    
        const orderList = Object.keys(this.props.ingredients).map(
            igKey => <li key={igKey}>
                <span style={style}>{igKey}</span> : {this.props.ingredients[igKey]}</li>
        );
    
        return (
            <React.Fragment>
                <h3>Your Order</h3>
                <p>ingredients: </p>
                <ul>
                    {orderList}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <button 
                    className={[classes.Button, classes.Danger].join(' ')}
                    onClick={this.props.purchaseCanceled}>
                    CANCEL
                </button>
    
                <button 
                    className={[classes.Button, classes.Success].join(' ')}
                    onClick={this.props.purchaseContinued}>
                    CONTINUE
                </button>
            </React.Fragment>
        );
    }
};

export default OrderSummary;