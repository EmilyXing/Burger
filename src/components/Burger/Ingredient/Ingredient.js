import React, { Component } from 'react';
import propTypes from 'prop-types';
import classes from './Ingredient.css';

class Ingredient extends Component {

    render() {

        let ing = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ing = <div className={classes.BreadBottom}></div>;
                break;

            case ('bread-top'):
                ing = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;

            case ('meat'):
                ing = <div className={classes.Meat}></div>;
                break;

            case ('cheese'):
                ing = <div className={classes.Cheese}></div>;
                break;

            case ('bacon'):
                ing = <div className={classes.Bacon}></div>;
                break;

            case ('salad'):
                ing = <div className={classes.Salad}></div>;
                break;

            default:
                ing = null;
        }

        return ing;
    }
};

Ingredient.protoType = {
    type: propTypes.string.isRequired
};

export default Ingredient;