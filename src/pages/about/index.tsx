import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import IconSettings from '../../assets/settings.svg?react';
import IconTask from '../../assets/tasks.svg?react';
import IconInfo from '../../assets/info.svg?react';
import MenuComponent from '../../components/Menu';
import IconFactory from '../../assets/factory.svg?react';
import IconWarehouse from '../../assets/warehouse.svg?react';
import InputComponent from '../../components/Input';
import ButtonFiltersComponent from '../../components/ButtonFilters';


const App: React.FC = () => {

    const goBack = () => {
        console.log('Going back');
        
    };

    return (
        <div>
            <header className={styles.header}>
            <h1 className={styles.h1} id="page-title">О системе</h1>
            </header>

            <div className={styles.content} id="content">
                {currentPage === 'main' && (
                    <>
                        <a href="#" onClick={() => changePage('tasks')}>
                            <IconTask className={styles.icon}/>
                            Задачи
                        </a>
                        <a href="#" onClick={() => changePage('settings')}>
                            <IconSettings className={styles.icon}/>
                            Настройки
                        </a>
                        <a href="#" onClick={() => changePage('about')}>
                            <IconInfo className={styles.icon}/>
                            О системе
                        </a>
                    </>
                )}
                {currentPage === 'tasks' && (
                    <>
                        <a href="#" onClick={() => changePage('Accounting')}>
                        <IconWarehouse className={styles.icon}/>
                           Складской учёт
                        </a>
                        <a href="#" onClick={() => changePage('AccountingProd')}>
                        <IconFactory className={styles.icon}/>
                           Учёт в производстве
                        </a>

                    </>
                )}
                {currentPage === 'settings' && (
                    <>
                        <a href="#" onClick={() => changePage('settings1')}>
                            <IconWarehouse className={styles.icon}/>
                            Настройка 1
                        </a>
                        <a href="#" onClick={() => changePage('settings2')}>
                            <IconFactory className={styles.icon}/>
                            Настройка 2
                        </a>
                        
                    </>
                )}
                
                {currentPage === 'scan' && (
                    <>
                    <div className={styles.scan}>
                        <a>                           
                            Сканируйте шрихкод с номером объекта или введите его вручную.
                        </a>
                        <InputComponent placeholder="" label="Номер объекта" required={0} />
                        <InputComponent placeholder="" label="Тип объекта БО" required={0} />
                        <ButtonFiltersComponent onSearch={handleSearch} onCancel={handleCancel} text ={'Перейти'}/>
                        </div>
                    </>
                )}
                {currentPage === 'AccountingProd' && (
                    <>
                    
                        <a href="#" onClick={() => changePage('acts')}>
                            Акты инвентаризации
                        </a>
                        <a href="#" onClick={() => changePage('vznon')}>        
                            Внутризаводские накладные (Приход)
                        </a>
                        <a href="#" onClick={() => changePage('vznout')}>        
                            Внутризаводские накладные (Расход)
                        </a>
                        <a href="#" onClick={() => changePage('limits')}>        
                            Лимитные карты (Приход)
                        </a>
                        <a href="#" onClick={() => changePage('nomenclature')}>        
                            Цеховая номенклатура
                        </a>
                        
                    </>
                    
                )}
                {currentPage === 'about' && <div>О системе</div>}
            </div>


            <MenuComponent  onBackClick={() => goBack()}/>
        </div>
    );
};

export default App;