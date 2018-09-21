import { GET_SOUNDS, TOGGLE_ON_OFF, CHANGE_LED, ADJUST_VOLUME } from '../actions/types';

const initialState = {
    sounds: [],
    power: true,
    led: true,
    volume: 50
};

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_SOUNDS:
            return {
                ...state,
                sounds: action.payload
            };
        case TOGGLE_ON_OFF:
            return {
                ...state,
                power: state.power ? false : true
            }; 
        case CHANGE_LED:
            return {
                ...state,
                led: state.led ? false : true
            };    
        case ADJUST_VOLUME:
            return {
                ...state,
                volume: action.payload
            };    
        default:
            return state;            
    }
}