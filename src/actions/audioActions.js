import { GET_SOUNDS, TOGGLE_ON_OFF, ADJUST_VOLUME } from './types';

export const getSounds = () => {
    return {
        type: GET_SOUNDS
    };
};

export const toggleOnOff = () => {
    return {
        type: TOGGLE_ON_OFF
    };
};

export const adjustVolume = () => {
    return {
        type: ADJUST_VOLUME
    };
};