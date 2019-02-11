import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateSmurf, deleteSmurf } from '../actions';

class Smurf extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.data.name,
      age: this.props.data.age,
      height: this.props.data.height,
      error: null,
      editing: false,
    };
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value, error: null });
  }
  handleUpdateSmurf = e => {
    e.preventDefault();
    const [ name, age, height ] = [ this.state.name, Number(this.state.age), this.state.height ];
    if (!name || !age || !height) return this.setState({ error: 'Please fill out all fields' });
    this.props.updateSmurf(this.props.data.id, { name, age, height });
    this.setState({ editing: false });
  }
  handleDeleteSmurf = e => {
    this.props.deleteSmurf(this.props.data.id);
  }
  render(){
    return this.state.editing 
      ? (
        <form className="smurf-edit" onSubmit={this.handleUpdateSmurf}>
          <span className="fas fa-undo-alt back" onClick={() => this.setState({ editing: false })}></span>
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
          <button>Update Smurf</button>
          { this.state.error ? <span className="input-error">{this.state.error}</span> : null }
        </form>
      ) 
      : (
        <div className="smurf-instance">
          <div className="icons">
            <span className="fas fa-user-edit edit" onClick={() => this.setState({ editing: true })}></span>
            <span className="fas fa-trash-alt delete" onClick={this.handleDeleteSmurf}></span>
          </div>
          <h3>{this.props.data.name}</h3>
          <p>{this.props.data.age} Smurf years old</p>
          <p>{this.props.data.height} tall</p>
        </div>
      );
  }
}

Smurf.propTypes = {
  updateSmurf: PropTypes.func,
  deleteSmurf: PropTypes.func,
  data: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    height: PropTypes.string,
    id: PropTypes.number,
  })
}

export default connect(state => ({}), { updateSmurf, deleteSmurf })(Smurf);