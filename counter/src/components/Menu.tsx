import React, {useState} from 'react';
import style from '../css/menu.module.css'
import Input from "./Input";


type MenuPropsType = {
    maxValue: number
    setMaxValue: (maxValue: number) => void
    startValue: number
    setStartValue: (startValue: number) => void
}

const Menu = ({maxValue, setMaxValue, startValue, setStartValue}: MenuPropsType) => {

    /*const [text, setText] = useState<string>('')*/
    const [errorInput, setErrorInput] = useState<string>('')

    const showAlertMax = () => {
        if (errorInput) {
            alert('введите число...')
        } else {
            alert(maxValue)
        }
    }

    const showAlertStart = () => {
        if (errorInput) {
            alert('введите число...')
        } else {
            alert(startValue)
        }
    }

    return (
        <div className={style.counterMenu}>

            <div className={style.values}>
                <div>Max Value:</div>
                {/*  <input className={style.input} value={maxValue}  type="number" />*/}
                <Input value={maxValue} onChangeText={setMaxValue} onEnter={showAlertMax}/>
            </div>

            <div className={style.values}>
                <div>Start Value:</div>
                {/* <input className={style.input} value={startValue}  type="number"/>*/}
                <Input value={startValue} onChangeText={setStartValue} onEnter={showAlertStart}/>
            </div>

        </div>
    );
};

export default Menu;