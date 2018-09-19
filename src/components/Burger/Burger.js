import React, { Component } from 'react';
import classes from './Burger.css';
import Ingredient from './Ingredient/Ingredient';

class Burger extends Component {
    render() {

        let hasInside = false;

        let inside = Object.keys(this.props.insideIngredients).map(igKey => {

            return [...Array(this.props.insideIngredients[igKey])].map(
                (_, i) => {
                    hasInside = true;
                    return <Ingredient key={igKey + i} type={igKey} />
                });
        });

        if (!hasInside) {
            inside = <p>Please start adding some ingredients!</p>;
        }

        return (
            <div className={classes.Burger}>
                <Ingredient type="bread-top" />
                {inside}
                <Ingredient type="bread-bottom" />
            </div>
        );
    }
};

export default Burger;