import React from 'react';

import styles from './index.module.css';

interface ButtonFilterComponentProps {
  onSearch: () => void;
  onCancel: () => void;
}

const ButtonFilters: React.FC<ButtonFilterComponentProps> = ({ onSearch, onCancel }) => {
  return (
    <div style={styles.buttonFilters}>
      <button
        type="button"
        className={`${styles.button} ${styles.buttonSearch}`}
        id="button-search"
        onClick={onSearch}
      >
        Поиск
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
