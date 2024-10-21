import React from 'react';

import styles from './index.module.css';

interface SelectProps {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  required?: 0 | 1;
  additionalLabel?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  required,
  additionalLabel,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.selectContainer}>
        <label className={styles.label}>
          {label}
          {required === 1 && <span style={{ color: 'black' }}>*</span>}
        </label>
        <select
          className={styles.select}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required === 1}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              style={{ maxWidth: '200px', overflowWrap: 'break-word' }}
            >
              {option.label}
            </option>
          ))}
        </select>
        {additionalLabel && (
          <div className={styles.additionalLabel}>{additionalLabel}</div>
        )}
      </div>
    </div>
  );
};

export default Select;
