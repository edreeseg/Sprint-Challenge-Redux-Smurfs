import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getSmurfs } from '../actions';
import Smurf from './Smurf';
import Loading from './Loading';

class SmurfList extends React.Component {
  componentDidMount(){
    this.props.getSmurfs();
  }
  render(){
  return this.props.loading 
    ? <Loading />
    : (
    <section className="smurf-list">
      {this.props.smurfs.map(smurf => <Smurf key={smurf.id} data={smurf} />)}
    </section>
  );
  }
}

SmurfList.propTypes = {
  getSmurfs: PropTypes.func,
  smurfs: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    loading: state.loading
  };
}

export default connect(mapStateToProps, { getSmurfs })(SmurfList);