import React from 'react';
import { Link } from 'react-router-dom';
import IconBack from '../../assets/back.svg?react';
import IconMenu from '../../assets/menu.svg?react';
import IconScan from '../../assets/scan.svg?react';

import styles from './index.module.css';

interface MenuProps {
  onBackClick: () => void;
}
const Menu: React.FC<MenuProps> = ({  onBackClick }) => {
  

 

  return (
    <div className={styles.menu}>
      <Link to="/main" className={styles.button}>
      <div className={styles.button}  >
        <IconMenu className={styles.icon} />
        <span className={styles.label}>Меню</span>
      </div>
      </Link>
      <Link to="/scan" className={styles.button}>
      <div className={styles.button} >
        <IconScan className={styles.icon} />
        <span className={styles.label}>Сканер</span>
      </div>
      </Link>
      <div className={styles.button} onClick={onBackClick}>
        <IconBack className={styles.icon} />
        <span className={styles.label}>Назад</span>
      </div>
    </div>
  );
};

export default Menu;