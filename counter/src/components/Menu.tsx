import React from 'react';
import style from '../css/menu.module.css'
import Input from "./Input";
import {maxValueAC,
    //maxValueTC,
    setMessageAC,
    startValueAC,
    //startValueTC
} from "../bll/counter-reducer";
import {useAppDispatch} from "../bll/store";


type MenuPropsType = {
    maxValue: number
    startValue: number
}

const Menu = ({maxValue, startValue}: MenuPropsType) => {
    const dispatch = useAppDispatch()

    const showAlertMax = () => alert("Введено значение: " + maxValue)
    const showAlertStart = () => alert("Введено значение: " + startValue)

    const maxInputHandler = (value: number) => {
        //dispatch(maxValueTC(value)) - санки теперь не нужны, делаем через store
        dispatch(maxValueAC(value))
        if (value < 0 || value <= startValue) {
            dispatch(setMessageAC('Incorrect values!'))
        } else dispatch(setMessageAC(`Enter values and press "Set"`))
    }
    const startInputHandler = (value: number) => {
        //dispatch(startValueTC(value))- санки теперь не нужны, делаем через store
        dispatch(startValueAC(value))
        if(value < 0 || value >= maxValue) {
            dispatch(setMessageAC('Incorrect values!'))
        } else dispatch(setMessageAC(`Enter values and press "Set"`))
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