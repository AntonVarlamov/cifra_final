import React, { useState } from 'react';
import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';
import IconLogo from '../../assets/logo.svg?react';
import InputLoginComponent from '../../components/InputLogin';
import ButtonComponent from '../../components/Button';
import { login } from '../../services/authService'; 

const App: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const data = await login(username, password); 
            console.log('Успешная авторизация:', data);

            const authToken = data.authToken; 
            console.log('Токен:', authToken); 

            navigate('/main'); 
        } catch (error) {
            console.error('Ошибка:', error);
            alert("Ошибка авторизации")
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
                <ButtonComponent text="Войти" onClick={handleLogin} />
            </div>
        </div>
    );
};

export default App;