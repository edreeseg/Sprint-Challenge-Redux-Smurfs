import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addSmurf } from '../actions';

class SmurfInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      error: '',
    };
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value, error: null });
  }
  handleAddSmurf = e => {
    e.preventDefault();
    const [ name, age, height ] = [ this.state.name, Number(this.state.age), this.state.height ]
    if (!name || !age || !height) return this.setState({ error: 'Please fill out all fields' });
    addSmurf({ name, age, height });
    this.setState({ name: '', age: '', height: ''});
  }
  render(){
    return (
      <form className="smurf-input" onSubmit={this.handleAddSmurf}>
        <input 
          type="text"
          name="name"
          placeholder="Name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input 
          type="number"
          name="age"
          placeholder="Age"
          onChange={this.handleChange}
          value={this.state.age}
        />
        <input 
          type="text"
          name="height"
          placeholder="Height"
          onChange={this.handleChange}
          value={this.state.height}
        />
        <button>Add Smurf</button>
        { this.state.error ? <span className="input-error">{this.state.error}</span> : null }
      </form>
    );
  }
}

export default connect(() => ({}), { addSmurf })(SmurfInput);