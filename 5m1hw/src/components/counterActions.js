
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export const increment = (value) => ({
    type: INCREMENT,
    payload: value,
});

export const decrement = (value) => ({
    type: DECREMENT,
    payload: value,
});

export const reset = () => ({
    type: RESET,
});
