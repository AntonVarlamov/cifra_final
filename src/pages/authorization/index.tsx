import React, { useState } from 'react';
import styles from './index.module.css';

import IconLogo from '../../assets/logo.svg?react';
import InputLoginComponent from '../../components/InputLogin';
import ButtonComponent from '../../components/Button';

const App: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('https://your-api-url.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            if (!response.ok) {
                throw new Error('Ошибка авторизации');
            }

            const data = await response.json();
            console.log('Успешная авторизация:', data);
            
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };

    return (
        <div>
            <div className={styles.content} id="content">
                <a>
                    <IconLogo /> OmpMobile
                </a>
                <InputLoginComponent 
                    placeholder="" 
                    label="Логин" 
                    required={0} 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <InputLoginComponent 
                    placeholder="" 
                    label="Пароль" 
                    required={0} 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <ButtonComponent text="Войти" onClick={handleLogin} to='main'/>
            </div>
        </div>
    );
};

export default App;