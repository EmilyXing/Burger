import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';

const INGREDIENTS_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.5,
    bacon: 0.8
};



class BurgerBuilder extends Component {
    state = {
        ingredients: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0
        },
        totalPrice: 4,
        purchasable: false,
        order: false
    };

    updatePurchasableState = (ingredients) => {
        let sum = 0;
        for (let i in ingredients) {
            sum += ingredients[i];
        }

        this.setState({ purchasable: sum > 0 });

    }

    orderHandler = () => {
        this.setState({order: true});
    }

    purchaseCancelHandler = () => {
        this.setState({order: false});
    }

    purchaseContinueHandler = () => {
        alert('continue');
    }

    addIngredientHandler = (type) => {
        const updateIngredient = { ...this.state.ingredients };
        updateIngredient[type] = this.state.ingredients[type] + 1;
        const updatePrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
        this.setState({
            ingredients: updateIngredient,
            totalPrice: updatePrice
        });
        this.updatePurchasableState(updateIngredient);
    }

    rmvIngredientHandler = (type) => {
        const currCount = this.state.ingredients[type];

        if (currCount <= 0) {
            return;
        }

        const updateIngredient = { ...this.state.ingredients };
        updateIngredient[type] = currCount - 1;
        const updatePrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
        this.setState({
            ingredients: updateIngredient,
            totalPrice: updatePrice
        });
        this.updatePurchasableState(updateIngredient);
    }

  

    render() {
        const buttonDisableInfo = { ...this.state.ingredients };

        return (
            <React.Fragment>
                <Burger insideIngredients={this.state.ingredients} />
                <Modal show={this.state.order} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purchaseCanceled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler} />

                </Modal>
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    rmvIngredient={this.rmvIngredientHandler}
                    disabled={buttonDisableInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.orderHandler}
                    price={this.state.totalPrice}
                />

            </React.Fragment>
        )
    }
}

export default BurgerBuilder;