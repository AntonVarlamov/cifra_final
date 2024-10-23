import React from 'react';

import IconBack from '../../assets/back.svg?react';
import IconMenu from '../../assets/menu.svg?react';
import IconScan from '../../assets/scan.svg?react';

import styles from './index.module.css';

interface MenuProps {
  onMenuClick: () => void; 
  onScanClick: () => void;
  onBackClick: () => void;
}
const Menu: React.FC<MenuProps> = ({ onMenuClick, onScanClick, onBackClick }) => {
  

 

  return (
    <div className={styles.menu}>
      <div className={styles.button}  onClick={onMenuClick}>
        <IconMenu className={styles.icon} />
        <span className={styles.label}>Меню</span>
      </div>
      <div className={styles.button} onClick={onScanClick}>
        <IconScan className={styles.icon} />
        <span className={styles.label}>Сканер</span>
      </div>
      <div className={styles.button} onClick={onBackClick}>
        <IconBack className={styles.icon} />
        <span className={styles.label}>Назад</span>
      </div>
    </div>
  );
};

export default Menu;