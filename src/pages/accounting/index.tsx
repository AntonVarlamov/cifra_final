import React from 'react';
import styles from './index.module.css';
import MenuComponent from '../../components/Menu';
import {  useNavigate } from 'react-router-dom';


const App: React.FC = () => {
    const navigate = useNavigate();
    const goBack = () => {
        console.log('Going back');
        navigate(-1)
    };

    return (
        <div>
            <header className={styles.header}>
            <h1 className={styles.h1} id="page-title">Складской учёт</h1>
            </header>

            <div className={styles.content} id="content">
                
            </div>


            <MenuComponent  onBackClick={() => goBack()}/>
        </div>
    );
};

export default App;