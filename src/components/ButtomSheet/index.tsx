import React, { useEffect, useState } from 'react';
import Line from '../../assets/line.svg?react'
import styles from './index.module.css'
import CheckboxComponent from '../Checkbox';
import LabelComponent from '../LabelComponent';

interface ButtomSheetProps {
    label: string;
    labelDown: string;
    isOpen: boolean;
    checked: boolean;
    option: string[];
}


const ButtomSheetComponent: React.FC<ButtomSheetProps> = ({ label, labelDown, isOpen, checked, option }) => {
    const [checkValue, setCheckValue] = useState<boolean>(checked);
    const [mouseY, setMouseY] = useState(480);
    const [mouseDown, setMouseDown] = useState(false);
    

    useEffect(()=>{
        if (isOpen)
        {
            setMouseY(400);
        }
        else
        {
            setMouseY(480);
        }
    },[isOpen])
    
    function moveWindow(event: React.MouseEvent<HTMLDivElement>){
        if (mouseDown){
            const y = event.clientY; 
            setMouseY(y-10);
        }
    };
    function clickWindow(){
        setMouseDown(true)
    };
    function downWindow(){
        setMouseDown(false)
    };
    function clickCheckBox()
    {
        setCheckValue(!checkValue);
    }


    return (
       <div className={styles.window} style={{top:mouseY}}>
            <div className={styles.headLine}onMouseDown={clickWindow} onMouseUp={downWindow} onMouseMove={moveWindow}><Line /></div> 
            <div className={styles.headContainer}>
                <div className={styles.LableContainer}>
                    <div className={styles.label}>{label}</div>
                    <div className={styles.labelDown}>{labelDown}</div>
                </div>
                <div className={styles.checkboxContainer}>
                    <CheckboxComponent id='' checked={checkValue} onChange={clickCheckBox}></CheckboxComponent>
                </div>
            </div> 
            <div className={styles.lineSeparator}><LabelComponent label='' ></LabelComponent></div>

            {
                option.map((elem)=> 
                <p>{elem}</p>
                )
            }
       </div>
    );
};

export default ButtomSheetComponent;