import React from 'react';

import styles from './index.module.css';

interface CheckboxComponentProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckboxComponent: React.FC<CheckboxComponentProps> = ({
  id,
  checked,
  onChange,
}) => {
  const handleCheckboxChange = () => {
    onChange(!checked);
  };

  return (
    <label className={styles.checkboxContainer}>
      <input
        type="checkbox"
        id={id}
        style={{ display: 'none' }}
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <div
        style={{
          ...styles.checkbox,
          ...(checked ? styles.checkboxChecked : {}),
        }}
        className={`${styles.checkbox} ${checked ? styles.checkboxChecked : ''}`}
      >
        {checked && <div style={styles.checkmark} />}
      </div>
      <span style={{ marginLeft: '8px' }} />
    </label>
  );
};

export default CheckboxComponent;
