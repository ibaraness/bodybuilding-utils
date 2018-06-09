import {UPDATE_USER_DATA} from './../actions/action-types';

export const userData = (state = {}, action) => {
    switch(action.type){
        case UPDATE_USER_DATA:
            return Object.assign({}, state, action.payload);
        default:
            return state; 
    }
}