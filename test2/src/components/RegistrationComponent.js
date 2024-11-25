import React, { useState } from 'react';

function RegistrationComponent () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registered, setRegistered] = useState(false);
    const [registeredUsers, setRegisteredUsers] = useState([]);
    const [error, setError] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!username || !password || !confirmPassword) {
            setError('Заполните все поля!');
            return;
        }

        if (password !== confirmPassword) {
            setError('Пароли не совпадают!');
            return;
        }

        if (registeredUsers.includes(username)) {
            setError('Пользователь с таким именем уже существует!');
            return;
        }

        setRegisteredUsers([...registeredUsers, username]);
        setRegistered(true);
        setUsername('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div>
            <h1>Регистрация</h1>
            {registered && <p>Вы успешно зарегистрированы!</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Имя пользователя:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Пароль:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Подтверждение пароля:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
}

export default RegistrationComponent;



