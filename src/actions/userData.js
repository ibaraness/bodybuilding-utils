import {UPDATE_USER_DATA} from './action-types';

export const updateUserData = (userData) => {
    return {
        type: UPDATE_USER_DATA,
        payload: userData 
    }
}