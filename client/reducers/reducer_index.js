import { combineReducers } from 'redux';
// import { reducer as modal } from 'redux-modal';
// import { reducer as formReducer } from 'redux-form';
import mainReducer from './main_reducer';

const rootReducer = combineReducers({
	main: mainReducer
});

export default rootReducer;
