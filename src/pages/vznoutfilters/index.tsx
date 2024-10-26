import React from 'react';
import styles from './index.module.css';
import {  useNavigate } from 'react-router-dom';
import MenuComponent from '../../components/Menu';
import IconClose from '../../assets/close.svg?react';
import InputComponent from '../../components/Input';
import FolderInputComponent from '../../components/FolderInput';
import ButtonFiltersComponent from '../../components/ButtonFilters';


const App: React.FC = () => {
    const navigate = useNavigate();
    const goBack = () => {
        console.log('Going back');
        navigate(-1)
    };
    const handleSearch = () => {
        console.log('Поиск выполнен!');
        navigate('/vznoutlist'); 
      };
      const handleCancel = () => {
        console.log('Отмена выполнена!');
        navigate(-1)
      };
    return (
        <div>
            <header className={styles.header}>
            <h1 className={styles.h1} id="page-title"><IconClose className={styles.icon} onClick={() => goBack()}/>Фильтр ВЗН УП</h1>
            </header>

            <div className={styles.content} id="content">

                    <div className={styles.scan}>
                        <InputComponent placeholder="" label="Номер ВЗН" required={0} />
                        <FolderInputComponent placeholder="" label="Отправитель" required={0} />
                        <FolderInputComponent placeholder="" label="Получатель" required={0} />
                        <InputComponent placeholder="" label="Дата принятия (период)" required={0} />
                        <ButtonFiltersComponent onSearch={handleSearch} onCancel={handleCancel} text ={'Поиск'}/>
                        </div>
                    
            </div>


            <MenuComponent  onBackClick={() => goBack()}/>
        </div>
    );
};

export default App;