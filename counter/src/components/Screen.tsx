import React from 'react';
import style from "../css/screen.module.css"


type ScreenPropsType = {
    maxValue: number
    startValue: number
    value: number
    error: string

}

export const Screen = ({maxValue, startValue, value, error}: ScreenPropsType) => {

    const falseValue = startValue < 0 || startValue >= maxValue || maxValue < 0
    const trueValue = value != startValue || startValue < maxValue

    const classError = error ? style.error : style.black
    const colorNum = value < maxValue ? /*style.black*/classError : style.red


    const messageError = <div>Incorrect value</div>
    const message = <div>Enter value and press "Set"</div>
    /*  const classValue = `${style.value} ${colorNum}`
      //const classError = error ? style.error: style.black
      const screen = `${error ? style.error: style.black} ${colorNum}`*/


    return (
        <div className={style.counterScreen}>
            {/*<div className={classValue}>{value}</div>
            <div >{startValue >= maxValue? enterValue : value}</div>*/}

            {/* {falseValue && falseValue
                ? <div>Incorrect value!</div>
                : <div>Enter value and press "Set"</div>}
            :{trueValue
            ? <div>{startValue <= maxValue? startValue: value}</div>
            : <div>{value}</div>}*/}

            {falseValue
                    ? messageError
                    : trueValue
                        ? message && <div className={colorNum}>{value}</div> : ''}
        </div>
    );
};