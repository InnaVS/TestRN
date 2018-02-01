import {
  RECEIVE_FILMS_LIST
} from '../actions/appActions';

const initialState = {
  filmsList: []
};

/**
 * Application reducer.
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_FILMS_LIST:
      console.log('action.filmsList!!!', action.filmsList);
      return {
        ...state,
        filmsList: action.filmsList
      };
    default:
      return state;
  }
};