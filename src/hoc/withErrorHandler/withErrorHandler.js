import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor (props) {
      super(props);

      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      }, error => this.setState({ error }));
      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({ error });
      });
    }

    state = {
      error: null,
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    }

    render () {
      return (
        <Aux>
          <Modal
          modalClosed={this.errorConfirmedHandler}
          show={this.state.error}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  }
}

export default withErrorHandler;
