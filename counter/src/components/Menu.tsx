import React from 'react';
import style from '../css/menu.module.css'
import Input from "./Input";
import {useDispatch} from "react-redux";
import {maxValueAC, setMessageAC, startValueAC} from "../store/counter-reducer";


type MenuPropsType = {
    maxValue: number
    //setMaxValue: (maxValue: number) => void
    startValue: number
    //setStartValue: (startValue: number) => void
    //setIsDisabled: (value: boolean) => void
}

const Menu = ({maxValue, startValue}: MenuPropsType) => {
    const dispatch = useDispatch()

    const showAlertMax = () => alert("Введено значение: " + maxValue)
    const showAlertStart = () => alert("Введено значение: " + startValue)

    const maxInputHandler = (number: number) => {
        dispatch(maxValueAC(number))
        if (number < 0 || number <= startValue) {
            dispatch(setMessageAC('Incorrect values!'))
        } else dispatch(setMessageAC('Enter values and press set'))
       // setMaxValue(number)
        //dispatch()
       // setIsDisabled(false)
    }
    const startInputHandler = (number: number) => {
        dispatch(startValueAC(number))
       // setStartValue(number)
      //  setIsDisabled(false)
    }

    return (
        <div className={style.counterMenu}>

            <div className={style.values}>
                <div>Max Value:</div>
                <Input maxValue={maxValue}
                       startValue={startValue}
                       value={maxValue}
                       onChangeText={maxInputHandler}
                       onEnter={showAlertMax}/>
            </div>

            <div className={style.values}>
                <div>Start Value:</div>
                <Input maxValue={maxValue}
                       startValue={startValue}
                       value={startValue}
                       onChangeText={startInputHandler}
                       onEnter={showAlertStart}/>
            </div>

        </div>
    );
};

export default Menu;