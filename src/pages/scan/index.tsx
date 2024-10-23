import React from 'react';
import styles from './index.module.css';

import MenuComponent from '../../components/Menu';
import IconClose from '../../assets/close.svg?react';
import InputComponent from '../../components/Input';
import ButtonFiltersComponent from '../../components/ButtonFilters';


const App: React.FC = () => {

    const goBack = () => {
        console.log('Going back');
        
    };
    const handleSearch = () => {
        console.log('Поиск выполнен!');
      };
      const handleCancel = () => {
        console.log('Отмена выполнена!');
      };
    return (
        <div>
            <header className={styles.header}>
            <h1 className={styles.h1} id="page-title"><IconClose className={styles.icon} onClick={() => goBack()}/>Сканировать номер объекта</h1>
            </header>

            <div className={styles.content} id="content">

                    <div className={styles.scan}>
                        <a>                           
                            Сканируйте шрихкод с номером объекта или введите его вручную.
                        </a>
                        <InputComponent placeholder="" label="Номер объекта" required={0} />
                        <InputComponent placeholder="" label="Тип объекта БО" required={0} />
                        <ButtonFiltersComponent onSearch={handleSearch} onCancel={handleCancel} text ={'Перейти'}/>
                        </div>
                    
            </div>


            <MenuComponent  onBackClick={() => goBack()}/>
        </div>
    );
};

export default App;