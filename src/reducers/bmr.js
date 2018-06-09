import {CALCULATE_BMR, UPDATE_BMR_DATA} from './../actions/action-types';
import { bmrFormula } from './../utils/bmr-formula';

const updateBmrData = (state = {}, action) => {
    return Object.assign({}, state, action.payload);
}

const calcualteBMR = (state = {}, {age, weight, height, gender, activity_level}) => {
    return Object.assign({}, state, {bmr:bmrFormula(age, weight, height, gender, activity_level)});
}

export const bmr = (state = {}, action) => {
    switch(action.type){
        case CALCULATE_BMR:
            return calcualteBMR(state, action.payload);
        case UPDATE_BMR_DATA:
            return updateBmrData(state, action);
        default:
            return state;
    }
}