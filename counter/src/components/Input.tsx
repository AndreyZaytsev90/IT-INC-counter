import React, {ChangeEvent, KeyboardEvent} from 'react';
import style from "../css/menu.module.css";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";

type InputPropsType = {
    maxValue: number
    startValue: number
    value: number
    onChangeText: (value: number) => void
    onEnter: () => void
}

const Input = ({maxValue, startValue, value, onChangeText, onEnter}: InputPropsType) => {

   /* const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)*/

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeText && onChangeText(Number(e.currentTarget.value))
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onEnter && e.key === 'Enter' && onEnter()
    }
    const falseValue = startValue < 0 || startValue >= maxValue || maxValue < 0
   const classInput = `${falseValue ? style.incorrectValue: style.input}`

    return (
        <input className={classInput}
               type={"number"}
               value={value}
               onChange={onChangeCallback}
               onKeyPress={onKeyPressCallback}/>
    );
};

export default Input;