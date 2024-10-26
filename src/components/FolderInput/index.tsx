import React, { useState } from 'react';
import IconFolder from '../../assets/folderinput.svg?react'
import styles from './index.module.css'


interface FolderInputProps {
    placeholder: string;
    label: string;
    required: 0 | 1;
    additionalLabel?: string;
    value?: string
}

const FolderInputComponent: React.FC<FolderInputProps> = ({ placeholder, label, required, additionalLabel, value }) => {
    const [inputValue, setInputValue] = useState<string>(value != undefined ? value : '');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };


    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <label className={styles.label}>
                    {label}
                    {required === 1 && <span style={{ color: 'black' }}>*</span>}</label>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className={styles.input}
                />
                <div className={styles.icon}><IconFolder/></div>
            </div>
            {additionalLabel && <div className={styles.additionalLabel}>{additionalLabel}</div>}
        </div>
    );
};

export default FolderInputComponent;