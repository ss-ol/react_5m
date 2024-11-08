const initialState = {
    dogs: [],
    isLoading: false,
    error: null,
    selectedBreed: null, // Для фильтрации по породе
};

const dogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DOGS_REQUEST':
            return { ...state, isLoading: true };
        case 'FETCH_DOGS_SUCCESS':
            return { ...state, dogs: action.payload, isLoading: false };
        case 'FETCH_DOGS_FAILURE':
            return { ...state, error: action.payload, isLoading: false };
        case 'SET_SELECTED_BREED':
            return { ...state, selectedBreed: action.payload };
        default:
            return state;
    }
};

export default dogReducer;
