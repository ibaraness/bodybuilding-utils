import {OPEN_BMR_MODAL} from './action-types';


export const setBmrMODAL = (open) => {
    return {
        type: OPEN_BMR_MODAL,
        payload: open 
    }
}