import React from 'react';


import styles from './index.module.css';

interface ButtonComponentProps {
  text: string;
  onClick?: () => void;

}

const Button: React.FC<ButtonComponentProps> = ({ text, onClick }) => {

  

  return (
    <button type="button" className={styles.button} id="button-icon" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;