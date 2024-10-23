import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

import MenuComponent from '../../components/Menu';



const App: React.FC = () => {

    const goBack = () => {
        console.log('Going back');
        
    };

    return (
        <div>
            <header className={styles.header}>
            <h1 className={styles.h1} id="page-title">Учёт в производстве</h1>
            </header>

            <div className={styles.content} id="content">
            <Link to="/acts">
                        <a>
                            Акты инвентаризации
                        </a>
                        </Link>
                        <Link to="/vznon">
                        <a >        
                            Внутризаводские накладные (Приход)
                        </a>
                        </Link>
                        <Link to="/vznout">
                        <a >        
                            Внутризаводские накладные (Расход)
                        </a>
                        </Link>
                        <Link to="/limits">
                        <a >        
                            Лимитные карты (Приход)
                        </a>
                        </Link>
                        <Link to="/nomenclature">
                        <a >        
                            Цеховая номенклатура
                        </a>
                        </Link>
            </div>


            <MenuComponent  onBackClick={() => goBack()}/>
        </div>
    );
};

export default App;