import { combineReducers } from 'redux';
import { bmr } from './bmr';
import { userData } from './userData';
import { bmrModal } from './bmrModal';

const rootReducer = combineReducers({bmr, userData, bmrModal});

export default rootReducer;