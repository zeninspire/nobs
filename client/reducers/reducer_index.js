import { combineReducers } from 'redux';
// import { reducer as modal } from 'redux-modal';
// import { reducer as formReducer } from 'redux-form';
import mainReducer from './main_reducer';
import timelineReducer from './timeline_reducer';

const rootReducer = combineReducers({
	main: mainReducer,
  timeline: timelineReducer
});

export default rootReducer;
