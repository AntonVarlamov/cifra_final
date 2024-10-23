import React from 'react';

import styles from './index.module.css';

interface ButtonFilterComponentProps {
  onSearch: () => void;
  onCancel: () => void;
  text: string;
}

const ButtonFilters: React.FC<ButtonFilterComponentProps> = ({ onSearch, onCancel, text }) => {
  return (
    <div className={styles.buttonFilters}>
      <button
        type="button"
        className={`${styles.button} ${styles.buttonSearch}`}
        id="button-search"
        onClick={onSearch}
      >
        {text}
      </button>
      <button
        type="button"
        className={`${styles.button} ${styles.buttonCancel}`}
        id="button-cancel"
        onClick={onCancel}
      >
        Отмена
      </button>
    </div>
  );
};

export default ButtonFilters;
