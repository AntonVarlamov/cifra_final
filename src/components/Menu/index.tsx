import React from 'react';

import IconBack from '../../assets/back.svg?react';
import IconMenu from '../../assets/menu.svg?react';
import IconScan from '../../assets/scan.svg?react';

import styles from './index.module.css';

const Menu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.button}>
        <IconMenu className={styles.icon} />
        <span className={styles.label}>Меню</span>
      </div>
      <div className={styles.button}>
        <IconScan className={styles.icon} />
        <span className={styles.label}>Сканер</span>
      </div>
      <div className={styles.button}>
        <IconBack className={styles.icon} />
        <span className={styles.label}>Назад</span>
      </div>
    </div>
  );
};

export default Menu;
