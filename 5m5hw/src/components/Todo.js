import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTaskStatus} from '../store/tasksSlice';


const Todo = ({ task }) => {
    const dispatch = useDispatch();

    const handleStatusChange = (newStatus) => {
        dispatch(updateTaskStatus({ id: task.id, newStatus }));
    };

    return (
        <li>
            {task.text} ({task.status})
            <button onClick={() => handleStatusChange('paused')} disabled={task.status !== 'active'}>
                Пауза
            </button>
            <button onClick={() => handleStatusChange('completed')} disabled={task.status !== 'active'}>
                Завершить
            </button>
        </li>
    );
};

export default Todo;
