import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import { connect } from 'react-redux';
import {
  addIngredient,
  removeIngredient,
  initIngredients
} from '../../store/actions';

class BurgerBuilder extends Component {
  state = {
    purchasing: false
  }

  componentDidMount() {
    this.props.initIngredients();
  }

  purchaseHandler () {
    this.setState({ purchasing: true });
  }

  updatePurchaseState () {
    const sum = Object.keys(this.props.ingredients)
      .map(igKey => this.props.ingredients[igKey].quantity)
      .reduce((sum, el) => sum + el, 0);
    return sum > 0;
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  }

  purchaseContinueHandler = () => {
    this.props.history.push({
      pathname: '/checkout'
    });
  }

  render () {
    const disabledInfo = {
      ...this.props.ingredients
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = this.props.error ? <p>Ingredients can't be loaded</p> : <Spinner />

    if (this.props.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
          ingredientAdded={this.props.addIngredient}
          ingredientRemoved={this.props.removeIngredient}
          disabled={disabledInfo}
          purchasable={this.updatePurchaseState()}
          ordered={this.purchaseHandler.bind(this)}
          price={this.props.totalPrice} />
        </Aux>
      )
      orderSummary = (
        <OrderSummary
        price={this.props.totalPrice.toFixed(2)}
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        ingredients={this.props.ingredients} />
      )
    }

    return (
      <Aux>
        <Modal
          modalClosed={this.purchaseCancelHandler}
          show={this.state.purchasing}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  };
}

const mapStatetoProps = state => ({
  ingredients: state.burgerBuilder.ingredients,
  totalPrice: state.burgerBuilder.totalPrice,
  error: state.burgerBuilder.error
});

const mapDispatchToProps = {
  addIngredient,
  removeIngredient,
  initIngredients
};

export default connect(mapStatetoProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
