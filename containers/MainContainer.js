import {connect} from 'react-redux';
import MainComponent from '../components/MainComponent';

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent);