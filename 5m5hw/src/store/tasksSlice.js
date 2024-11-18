import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        activeTask: null
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                id: Date.now(),
                title: action.payload,
                timeSpent: 0,
                status: 'active'
            });
        },
        setActiveTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task && task.status !== 'completed' ) {
                state.activeTask = action.payload;
            }

        },
        incrementTimeSpent: (state) => {
            if (state.activeTask) {
                const task = state.tasks.find(task => task.id === state.activeTask);
                if (task && task.status === 'active') {
                    task.timeSpent += 1;
                }
            }
        },
        updateTaskStatus: (state, action) => {
            const { id, newStatus } = action.payload;
            const task = state.tasks.find(task => task.id === id);
            if (task) {
                task.status = newStatus;
                if (newStatus === 'completed') {
                    state.activeTask = null;
                }

            }


        },



        completeTask: (state) => {
            if (state.activeTask) {
                const task = state.tasks.find(task => task.id === state.activeTask)
                if (task) {
                    task.status = 'completed'
                    state.activeTask = null
                }
            }

        }
    }
});

export const { addTask, setActiveTask, incrementTimeSpent, completeTask, updateTaskStatus } = tasksSlice.actions; // Экспортируем updateTaskStatus
export default tasksSlice.reducer;