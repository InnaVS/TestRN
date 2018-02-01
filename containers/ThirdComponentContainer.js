import {connect} from 'react-redux';
import ThirdComponentForNav from '../components/ThirdComponentForNav';

import {loadMovie} from '../store/actions/appActions';

const mapStateToProps = (state) => {
  console.log('state!!', state);
  return state.appReducer;
};

const mapDispatchToProps = (dispatch) => ({
  onLoadFilms: () => {
    dispatch(loadMovie());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThirdComponentForNav);