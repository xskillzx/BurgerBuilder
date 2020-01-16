import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-cfa65.firebaseio.com/'
});

export default instance;
