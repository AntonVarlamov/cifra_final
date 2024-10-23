import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

import MenuComponent from '../../components/Menu';
import IconFactory from '../../assets/factory.svg?react';
import IconWarehouse from '../../assets/warehouse.svg?react';


const App: React.FC = () => {

    const goBack = () => {
        console.log('Going back');
        
    };

    return (
        <div>
            <header className={styles.header}>
            <h1 className={styles.h1} id="page-title">Настройки</h1>
            </header>

            <div className={styles.content} id="content">
            <Link to="/tasks">
                        <a >
                            <IconWarehouse className={styles.icon}/>
                            Настройка 1
                        </a>
                        </Link>
                        <Link to="/tasks">
                        <a >
                            <IconFactory className={styles.icon}/>
                            Настройка 2
                        </a>
                        </Link>
                        
                    
            </div>


            <MenuComponent  onBackClick={() => goBack()}/>
        </div>
    );
};

export default App;