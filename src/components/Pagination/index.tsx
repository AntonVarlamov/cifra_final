import React from 'react';

import styles from './index.module.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePreviousClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.button} ${currentPage === 1 ? styles.disabledButton : ''}`}
        onClick={handlePreviousClick}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      <div className={styles.currentPageBox}>{currentPage}</div> из {totalPages}
      <button
        className={`${styles.button} ${currentPage === totalPages ? styles.disabledButton : ''}`}
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
