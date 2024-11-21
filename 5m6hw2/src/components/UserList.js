import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/userSlice';

const UserList = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>
            <h1>Список Пользователей</h1>
            {loading && <p>Загрузка...</p>}
            {error && <p>Ошибка: {error}</p>}
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.name.first} {user.name.last}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
