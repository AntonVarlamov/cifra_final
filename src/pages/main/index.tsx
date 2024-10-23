import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import IconSettings from '../../assets/settings.svg?react';
import IconTask from '../../assets/tasks.svg?react';
import IconInfo from '../../assets/info.svg?react';
import MenuComponent from '../../components/Menu';



const App: React.FC = () => {

    const goBack = () => {
        console.log('Going back');
        
    };
   
   
    return (
        <div>
            <header className={styles.header}>
            <h1 className={styles.h1} id="page-title">Меню</h1>
            </header>

            <div className={styles.content} id="content">
            <Link to="/tasks">
                        <a >
                            <IconTask className={styles.icon}/>
                            Задачи
                        </a>
            </Link>
            <Link to="/settings">
            
                        <a >
                            <IconSettings className={styles.icon}/>
                            Настройки
                        </a>
                        </Link>
            <Link to="/about">
                        <a >
                            <IconInfo className={styles.icon}/>
                            О системе
                        </a>
            </Link>
                   
            </div>


            <MenuComponent  onBackClick={() => goBack()}/>
        </div>
    );
};

export default App;