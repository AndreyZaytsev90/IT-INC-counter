import React, {ChangeEvent, KeyboardEvent} from 'react';
import style from "../css/menu.module.css";

type InputPropsType = {
    value: number
    onChangeText: (value: number) => void
    onEnter: () => void
}

const Input = ({value, onChangeText, onEnter}: InputPropsType) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeText && onChangeText(Number(e.currentTarget.value))
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onEnter && e.key === 'Enter' && onEnter()
    }

    return (
        <input className={style.input}
               type={"number"}
               value={value}
               onChange={onChangeCallback}
               onKeyPress={onKeyPressCallback}/>
    );
};

export default Input;