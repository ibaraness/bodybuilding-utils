import {CALCULATE_BMR, UPDATE_BMR_DATA} from './../actions/action-types';
import { bmrFormula } from './../utils/bmr-formula';

export const bmr = (state = {}, action) => {
    switch(action.type){
        case CALCULATE_BMR:
            const {age, weight, height, gender, activity_level} = action.payload
            return Object.assign({}, state, {bmr:bmrFormula(age, weight, height, gender, activity_level)});
        case UPDATE_BMR_DATA:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}