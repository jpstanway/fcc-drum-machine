import { GET_SOUNDS, TOGGLE_ON_OFF, CHANGE_LED, ADJUST_VOLUME } from './types';
import Bank from '../components/Bank';

export const getSounds = (index) => dispatch => {
    const sounds = Bank;
    dispatch({
        type: GET_SOUNDS,
        payload: sounds[index]
    });
};

export const toggleOnOff = () => dispatch => {
    dispatch({
        type: TOGGLE_ON_OFF
    });
};

export const changeLED = () => dispatch => {
    dispatch({
        type: CHANGE_LED
    });
}

export const adjustVolume = (val) => dispatch => {
    dispatch({
        type: ADJUST_VOLUME,
        payload: val
    });
};