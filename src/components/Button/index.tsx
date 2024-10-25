import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.css';

interface ButtonComponentProps {
  text: string;
  onClick?: () => void;
  to?: string; 
}

const Button: React.FC<ButtonComponentProps> = ({ text, onClick, to }) => {

  if (to) {
    return (
      <Link to={to} className={styles.button} id="button-icon" onClick={onClick}>
        {text}
      </Link>
    );
  }

  return (
    <button type="button" className={styles.button} id="button-icon" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;