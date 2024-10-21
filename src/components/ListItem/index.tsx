import React from 'react';

import styles from './ListItem.module.css';

interface ListItemComponentProps {
  name: string;
  sender: string;
  comer: string;
  date: string;
}

const ListItemComponent: React.FC<ListItemComponentProps> = ({
  name,
  sender,
  comer,
  date,
}) => {
  return (
    <div className={styles.elem_lists}>
      <p className={styles.elem_list_name}>{name}</p>
      <p className={styles.elem_lists_p}>Отправитель: {sender}</p>
      <p className={styles.elem_lists_p}>Получатель: {comer}</p>
      <p className={styles.elem_lists_p}>Дата выдачи: {date}</p>
    </div>
  );
};

export default ListItemComponent;
