import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';
import SmurfInput from './SmurfInput';
import SmurfList from './SmurfList';

class App extends Component {
  render() {
    return (
      <div className="App">
        { this.props.error ? <div className="app-error">{this.props.error}</div> : null }
        <SmurfInput />
        <SmurfList />
      </div>
    );
  }
}

App.propTypes = {
  error: PropTypes.string
}

const mapStateToProps = state => {
  return {
    error: state.error,
  }
}

export default connect(mapStateToProps)(App);
