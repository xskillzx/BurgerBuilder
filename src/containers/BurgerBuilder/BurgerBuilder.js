import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import { connect } from 'react-redux';
import {
  addIngredient,
  removeIngredient,
  placeOrder
} from '../../store/actions/Actions';

class BurgerBuilder extends Component {
  state = {
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false,
  }

  componentDidMount () {
    // axios.get('https://react-my-burger-cfa65.firebaseio.com/ingredients.json')
    //   .then(res => {
    //     this.setState({ ingredients: res.data });
    //   })
    //   .catch(error => this.setState({ error: true }));
  }

  purchaseHandler () {
    this.setState({ purchasing: true });
  }

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((sum, el) => sum + el);
    this.setState({ purchasable: sum > 0 })
  }

  addIngredientHandler = type => {
    // this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = type => {
    // this.updatePurchaseState(updatedIngredients);
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  }

  purchaseContinueHandler = () => {
    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    };
    queryParams.push('price=' + this.state.totalPrice);
    const queryString = queryParams.join('&');

    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
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

    let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />

    if (this.props.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
          ingredientAdded={this.props.addIngredient}
          ingredientRemoved={this.props.removeIngredient}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
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

    if (this.state.loading) {
      orderSummary = <Spinner />
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
  ingredients: state.ingredients,
  totalPrice: state.totalPrice
});

const mapDispatchToProps = {
  addIngredient,
  removeIngredient,
  placeOrder
};

export default connect(mapStatetoProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
