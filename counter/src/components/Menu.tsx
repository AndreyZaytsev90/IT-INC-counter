import React, {useState} from 'react';
import style from '../css/menu.module.css'
import Input from "./Input";


type MenuPropsType = {
    maxValue: number
    setMaxValue: (maxValue: number) => void
    startValue: number
    setStartValue: (startValue: number) => void
    setIsDisabled: (value: boolean) => void
}

const Menu = ({maxValue, setMaxValue, startValue, setStartValue, setIsDisabled}: MenuPropsType) => {

    const showAlertMax = () => alert("Введено значение: " + maxValue)
    const showAlertStart = () => alert("Введено значение: " + startValue)

    const maxInputHandler = (number: number) => {
        setMaxValue(number)
        setIsDisabled(false)
    }
    const startInputHandler = (number: number) => {
        setStartValue(number)
        setIsDisabled(false)
    }

    return (
        <div className={style.counterMenu}>

            <div className={style.values}>
                <div>Max Value:</div>
                <Input value={maxValue} onChangeText={maxInputHandler} onEnter={showAlertMax}/>
            </div>

            <div className={style.values}>
                <div>Start Value:</div>
                <Input value={startValue} onChangeText={startInputHandler} onEnter={showAlertStart}/>
            </div>

        </div>
    );
};

export default Menu;