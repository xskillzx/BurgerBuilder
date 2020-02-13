import React from 'react';
import { Link } from 'react-router-dom';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{
        width: '100%',
        margin: 'auto'
      }}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Link to='/'>
        <Button 
          clicked
          btnType='Danger'>
          CANCEL
        </Button>
      </Link>
      <Link to='/checkout'>
        <Button 
          clicked
          btnType='Success'>
          CONTINUE
        </Button>
      </Link>
      </div>
  );
}

export default checkoutSummary;
