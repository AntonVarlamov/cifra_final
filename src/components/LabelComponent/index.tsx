import React from 'react';

import styles from './LabelComponent.module.css';

interface LabelComponentProps {
  label: string;
}

const LabelComponent: React.FC<LabelComponentProps> = ({ label }) => {
  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default LabelComponent;
