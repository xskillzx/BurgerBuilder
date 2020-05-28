import { createStore } from 'redux';
import burgerBuilder from './reducers';

const store = createStore(burgerBuilder);

export default store;
