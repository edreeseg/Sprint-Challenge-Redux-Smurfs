import React, { Component } from 'react';
import './App.css';
import { addSmurf } from '../actions';
import SmurfInput from './SmurfInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfInput />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
}

export default App;
