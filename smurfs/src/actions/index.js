import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';
export const GET_SMURFS = 'GET_SMURFS';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const ERROR = 'ERROR';
export const LOADING = 'LOADING';

export const getSmurfs = () => dispatch => { // Need to figure out how to send payload of custom error response on a 422 error.
  dispatch({ type: LOADING });
  axios.get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: GET_SMURFS, payload: res.data }))
    .catch(err => dispatch({ type: ERROR, payload: 'There was an error while retrieving Smurfs.' }));
}

export const addSmurf = smurf => dispatch => {
  dispatch({ type: LOADING });
  axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => dispatch({ type: ADD_SMURF, payload: res.data}))
    .catch(err => dispatch({ type: ERROR, payload: 'There was an error while adding Smurf.' }));
}

export const updateSmurf = (id, smurf) => dispatch => {
  dispatch({ type: LOADING });
  axios.put(`http://localhost:3333/smurfs/${id}`, smurf)
    .then(res => dispatch({ type: UPDATE_SMURF, payload: res.data }))
    .catch(err => dispatch({ type: ERROR, payload: 'There was an error while attempting to update Smurf.' }));
}

export const deleteSmurf = (id, smurf) => dispatch => {
  dispatch({ type: LOADING });
  axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({ type: DELETE_SMURF, payload: res.data }))
    .catch(err => dispatch({ type: ERROR, payload: 'There was an error while attempting to delete Smurf.' }));
}