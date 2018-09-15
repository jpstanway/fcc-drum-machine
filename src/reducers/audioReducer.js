import { GET_SOUNDS, TOGGLE_ON_OFF, ADJUST_VOLUME } from '../actions/types';

const initialState = {

};

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_SOUNDS:
            return {
                ...state
            };
        case TOGGLE_ON_OFF:
            return {
                ...state
            };
        case ADJUST_VOLUME:
            return {
                ...state
            };
        default:
            return state;            
    }
}