import React from 'react';

import EditIcon from '../../assets/edit.svg?react';

import styles from './index.module.css';

interface ButtonIconComponentProps {
  text: string;
  onClick: () => void;
}

const ButtonIcon: React.FC<ButtonIconComponentProps> = ({ text, onClick }) => {
  return (
    <button type="button" className={styles.button} id="button-icon" onClick={onClick}>
      <EditIcon className={styles.icon} />
      {text}
    </button>
  );
};

export default ButtonIcon;
