import { INCREMENT, DECREMENT, RESET } from './counterActions';

const initialState = {
    count: 0,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + action.payload,
            };
        case DECREMENT:
            return {
                ...state,
                count: Math.max(state.count - action.payload, 0), // Не позволяем счетчику уходить в минус
            };
        case RESET:
            return initialState;
        default:
            return state;
    }
};

export default counterReducer;
