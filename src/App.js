import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  render() {
    /* eslint-disable react/prop-types */
    const {
      fetching, dog, onRequestDog, error,
    } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={dog || logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dog Saga</h1>
        </header>

        {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Replace the React icon with a dog!</p>
        )}

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={onRequestDog}>Request a Dog</button>
        )}

        {error && <p style={{ color: 'red' }}>Uh oh - something went wrong!</p>}

      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetching: state.fetching,
  dog: state.dog,
  error: state.error,
});

const mapDispatchToProps = dispatch => ({
  onRequestDog: () => dispatch({ type: 'API_CALL_REQUEST' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
