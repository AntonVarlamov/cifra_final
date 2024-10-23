import React, { useState } from 'react';
import styles from './index.module.css';

import IconSettings from '../../assets/settings.svg?react';
import IconTask from '../../assets/tasks.svg?react';
import IconInfo from '../../assets/info.svg?react';
import MenuComponent from '../../components/Menu';
import IconFactory from '../../assets/factory.svg?react';
import IconWarehouse from '../../assets/warehouse.svg?react';
import InputComponent from '../../components/Input';
import ButtonFiltersComponent from '../../components/ButtonFilters';


const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<string>('main'); 

    const changePage = (page: string) => {
        console.log(`Changing to page: ${page}`);
        setCurrentPage(page); 
    };

    const goBack = () => {
        console.log('Going back');
        
    };
    const handleSearch = () => {
        console.log('Поиск выполнен!');
      };
      const handleCancel = () => {
        console.log('Отмена выполнена!');
      };
    const getPageTitle = (page: string) => {
        switch (page) {
            case 'main':
                return 'Меню';
            case 'tasks':
                return 'Задачи';
            case 'settings':
                return 'Настройки';
            case 'about':
                return 'О системе';
            case 'scan':
                return 'Сканер'; 
            case 'Accounting':
                return 'Складской учёт'; 
            case 'AccountingProd':
                return 'Учёт в производстве'; 
            case 'acts':
                return 'Акты инвентаризации'; 
            case 'vznon':
                return 'Внутризаводские накладные (Приход)'; 
            case 'vznout':
                return 'Внутризаводские накладные (Расход)';
            case 'limits':
                return 'Лимитные карты (Приход)'; 
            case 'nomenclature':
                return 'Цеховая номенклатура'; 
            default:
                return 'Меню'; 
        }
    };
    return (
        <div>
            <header className={styles.header}>
            <h1 className={styles.h1} id="page-title">{getPageTitle(currentPage)}</h1>
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


            <MenuComponent onMenuClick={() => changePage('main')} onScanClick={() => changePage('scan')} onBackClick={() => goBack()}/>
        </div>
    );
};

export default App;