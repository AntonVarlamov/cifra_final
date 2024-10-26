import React from 'react';
import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';

import MenuComponent from '../../components/Menu';
import ButtonIcon from '../../components/ButtonIcon';
import ListItemComponent from '../../components/ListItem';



const App: React.FC = () => {
    const navigate = useNavigate();
    const goBack = () => {
        console.log('Going back');
        navigate(-1)
    };

    return (
        <div>
            <div className={styles.header}>
                <div className={styles.text}>ВЗН УП (Расход)</div>
                <div className={styles.buttons}>
                    <div className={styles.button}><ButtonIcon type="Edit" onClick={() => { }} text="Поиск"></ButtonIcon></div>
                    <div className={styles.button}><ButtonIcon type="Add" onClick={() => { }} text="Создать"></ButtonIcon></div>
                </div>
            </div>
            <div className={styles.main}>
                <ListItemComponent name="ВЗН №1" sender='Цех 1' comer='Цех 5' date='15.06.2024'></ListItemComponent>
                <ListItemComponent name="ВЗН №2" sender='Цех 2' comer='Цех 1' date='15.06.2024'></ListItemComponent>
                <ListItemComponent name="ВЗН №3" sender='Цех 3' comer='Цех 1' date='15.06.2024'></ListItemComponent>
                <ListItemComponent name="ВЗН №4" sender='Цех 4' comer='Цех 1' date='15.06.2024'></ListItemComponent>
                <ListItemComponent name="ВЗН №5" sender='Цех 5' comer='Цех 1' date='15.06.2024'></ListItemComponent>
            </div>
            <MenuComponent onBackClick={() => goBack()} />
        </div>
    );
};

export default App;