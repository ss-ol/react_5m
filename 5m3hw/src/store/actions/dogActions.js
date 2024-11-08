import axios from 'axios';

const API_URL = 'https://dog.ceo/api/breeds/list/all';

export const fetchDogs = (breed) => async (dispatch) => {
    try {
        dispatch({ type: 'FETCH_DOGS_REQUEST' });
        const response = await axios.get(`${API_URL}`);
        dispatch({ type: 'FETCH_DOGS_SUCCESS', payload: response.data.message });
    } catch (error) {
        dispatch({ type: 'FETCH_DOGS_FAILURE', payload: error.message });
    }
};

export const setSelectedBreed = (breed) => ({ type: 'SET_SELECTED_BREED', payload: breed });
