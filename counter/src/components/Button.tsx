import React from 'react';
import style from "../css/button.module.css"

type ButtonPropsType = {
    name: string
    callBack: () => void
    isDisabled: boolean
}

export const Button = ({name, callBack, isDisabled}: ButtonPropsType) => {

    const onClickHandler = () => {
        callBack()
    }

    return (
        <div className={style.counterButtons}>
            <button onClick={onClickHandler} disabled={isDisabled}>{name}</button>
        </div>
    );
};
