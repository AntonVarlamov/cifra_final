import React, { useState } from 'react';

import styles from './index.module.css';

interface InputComponentProps {
  placeholder: string; // Пропс для placeholder
  label: string;
  required: 0 | 1;
}

// Стиль для компонента

const InputComponent: React.FC<InputComponentProps> = ({
  placeholder,
  label,
  required,
}) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <label className={styles.label}>
          {label}
          {required === 1 && <span style={{ color: '#49454F' }}>*</span>}
        </label>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          className={styles.input}
        />
      </div>
    </div>
  );
};

export default InputComponent;
