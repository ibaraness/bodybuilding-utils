import {CALCULATE_BMR, UPDATE_BMR_DATA} from './action-types';

export const calculateBmr = ({age, weight, height, gender, activity_level}) => {
    return {
        type: CALCULATE_BMR,
        payload: {age, weight, height, gender, activity_level} 
    }
}

export const updateBmrData = (name, value) => {
    return {
        type: UPDATE_BMR_DATA,
        payload: {[name]:value} 
    }
}