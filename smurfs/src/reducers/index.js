import { ADD_SMURF, GET_SMURFS, DELETE_SMURF, UPDATE_SMURF, LOADING, ERROR } from '../actions';

const initialState = {
   smurfs: [],
   loading: false,
   error: null
 }

export default (state = initialState, action) => {
  switch(action.type){
    case LOADING:
      return { ...state, loading: true };
    case GET_SMURFS:
      return { ...state, loading: false, error: null, smurfs: action.payload }; // Should these be combined into a single case for the reducer?
    case ADD_SMURF:
      return { ...state, loading: false, error: null, smurfs: action.payload };
    case UPDATE_SMURF:
      return { ...state, loading: false, error: null, smurfs: action.payload };
    case DELETE_SMURF:
      return { ...state, loading: false, error: null, smurfs: action.payload };
    case ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}