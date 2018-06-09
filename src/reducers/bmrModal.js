import { OPEN_BMR_MODAL } from './../actions/action-types';

export const bmrModal = (state = false, action) => {
    switch(action.type){
        case OPEN_BMR_MODAL:
            return action.payload;
        default:
            return state;
    }
};