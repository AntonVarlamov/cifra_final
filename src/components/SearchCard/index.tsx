import React from 'react';

import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import { ReactComponent as MoreIcon } from '../../assets/more.svg';
import ButtonIconComponent from '../ButtonIcon/index';

import styles from './index.module.css';

interface SearchCardProps {
  mainText: string;
  additionalText: string;
  onClose: () => void;
  More: () => void;
}

const SearchCard: React.FC<SearchCardProps> = ({
  mainText,
  additionalText,
  onClose,
  More,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.closeButton} onClick={onClose}>
        <CloseIcon />
      </div>
      <div className={styles.textContainer}>
        <span className={styles.mainText}>{mainText}</span>
        <span className={styles.additionalText}>{additionalText}</span>
      </div>
      <ButtonIconComponent
        text="Поиск"
        onClick={() => console.log('Действие выполнено')}
      />
      <div className={styles.closeButton} onClick={More}>
        <MoreIcon />
      </div>
    </div>
  );
};

export default SearchCard;
