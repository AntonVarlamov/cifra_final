import React from 'react';
import styles from './index.module.css';

interface InputLoginComponentProps {
  placeholder: string; 
  label: string;
  required: 0 | 1;
  value: string; 
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  type?: string; 
}

const InputLoginComponent: React.FC<InputLoginComponentProps> = ({
  placeholder,
  label,
  required,
  value,
  onChange,
  type = 'text', 
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <label className={styles.label}>
          {label}
          {required === 1 && <span style={{ color: '#49454F' }}>*</span>}
        </label>
        <input
          type={type} 
          value={value} 
          onChange={onChange} 
          placeholder={placeholder}
          className={styles.input}
        />
      </div>
    </div>
  );
};

export default InputLoginComponent;