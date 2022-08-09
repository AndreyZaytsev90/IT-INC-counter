import React from 'react';
import style from "../css/screen.module.css"


type ScreenPropsType = {
    maxValue: number
    startValue: number
    value: number
    error: string

}

export const Screen = ({maxValue, startValue, value, error}: ScreenPropsType) => {

    const colorNum = value < maxValue ? style.black : style.red
    const classValue = `${style.value} ${colorNum}`
    //const classError = error ? style.error: style.black
    const screen = `${error ? style.error: style.black}`


    return (
        <div className={style.counterScreen}>
           {/* <div className={classValue}>{value}</div>*/}
            <div className={screen}>{startValue >= maxValue? error : value}</div>
        </div>
    );
};