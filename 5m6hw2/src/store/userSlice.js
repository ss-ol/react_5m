
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const apiUrl = 'https://api.randomuser.me/';


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            const message = `Ошибка получения данных: ${response.status}`;
            throw new Error(message); // Важно! Бросаем ошибку
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Ошибка при получении пользователей:', error); // Логирование
        return []; 
    }
});

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default userSlice.reducer;

