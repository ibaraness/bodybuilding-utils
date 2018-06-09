import {CALCULATE_BMR, UPDATE_BMR_DATA} from './action-types';
import {setBmrMODAL} from './bmrModal';

export const _calculateBmr = ({age, weight, height, gender, activity_level}) => {
    return {
        type: CALCULATE_BMR,
        payload: {age, weight, height, gender, activity_level} 
    }
}

export const calculateBmr = (bmrData) => {
    return (dispatch, getState) => {  
        dispatch(_calculateBmr(bmrData));
        dispatch(setBmrMODAL(false));
    }
}

export const updateBmrData = (name, value) => {
    return {
        type: UPDATE_BMR_DATA,
        payload: {[name]:value} 
    }
}