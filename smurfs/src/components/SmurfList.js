import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getSmurfs } from '../actions';
import Smurf from './Smurf';

class SmurfList extends React.Component {
  componentDidMount(){
    this.props.getSmurfs();
  }
  render(){
  return (
    <section className="smurf-list">
      {this.props.smurfs.map(smurf => <Smurf key={smurf.id} data={smurf} />)}
    </section>
  );
  }
}

SmurfList.propTypes = {
  getSmurfs: PropTypes.func,
  smurfs: PropTypes.arrayOf(PropTypes.object)
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
  };
}

export default connect(mapStateToProps, { getSmurfs })(SmurfList);