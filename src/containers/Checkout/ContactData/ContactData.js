import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Big Mo',
        address: {
          street: 'Teststreet 1',
          zipCode: '23422',
          country: 'USA'
        },
        email: 'dfdsf@dfsdf.com'
      },
      deliveryMethod: 'fastest'
    };
    const doneLoadingPurchasing = {
      loading: false,
      purchasing: false
    };

    axios.post('orders.json', order)
      .then(response => {
        this.setState(doneLoadingPurchasing);
        this.props.history.push('/');
      })
      .catch(error => this.setState(doneLoadingPurchasing));
  }

  render() {
    let form = (
      <form>
        <input className={classes.Input} type='text' name='name' placeholder='Your Name' />
        <input className={classes.Input} type='email' name='email' placeholder='Your Email' />
        <input className={classes.Input} type='text' name='street' placeholder='Your Street Address' />
        <input className={classes.Input} type='text' name='postal' placeholder='Your Postal Code' />
        <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;