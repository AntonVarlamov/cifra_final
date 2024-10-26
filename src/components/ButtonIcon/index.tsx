import React from 'react';

import EditIcon from '../../assets/edit.svg?react';
import SearchIcon from '../../assets/add.svg?react';

import styles from './index.module.css';

interface ButtonIconComponentProps {
  text: string;
  onClick: () => void;
  type: string;
}

const ButtonIcon: React.FC<ButtonIconComponentProps> = ({ text, onClick, type }) => {
  return (
    <button type="button" className={styles.button} id="button-icon" onClick={onClick}>
      {
        type === "Edit"? 
        <EditIcon className={styles.icon} /> 
        : 
        <SearchIcon className={styles.icon} />
      }
      
      {text}
    </button>
  );
};

export default ButtonIcon;
