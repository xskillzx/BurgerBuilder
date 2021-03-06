import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // this could be a functional component, doesn't have to be a class
  render () {
    const ingredientSummary = Object.keys(this.props.ingredients)
    .sort((a, b) => {
      return this.props.ingredients[a].priority - this.props.ingredients[b].priority;
    })
    .map(igKey => (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>
        : {this.props.ingredients[igKey].quantity}
      </li>
    ));

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: {this.props.price}</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType='Danger' clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </Aux>
    );
  }
};

export default OrderSummary;
