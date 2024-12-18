import React from 'react';
import style from "../css/screen.module.css"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../bll/store";


type ScreenPropsType = {
    maxValue: number
    startValue: number
    value: number
    //isDisabled: boolean

}

export const Screen = ({maxValue, startValue, value}: ScreenPropsType) => {

    const message = useSelector<AppRootStateType, string>(state => state.counter.message)

    const falseValue = startValue < 0 || startValue >= maxValue || maxValue < 0
    /*const trueValue = value != startValue || startValue < maxValue*/

    const colorNum = value < maxValue ? style.black: style.red
    const colorMessage = message !== `Enter values and press "Set"` ? style.error: style.enterValue

    //const message = !isDisabled && !falseValue ? `Enter value and press "Set"` : "Incorrect value"

    /*  const classValue = `${style.value} ${colorNum}`
      //const classError = error ? style.error: style.black
      const screen = `${error ? style.error: style.black} ${colorNum}`*/
    // console.log(!isDisabled || falseValue)
    // console.log(message)

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
            {message ? <div className={colorMessage}>{message}</div> : <div className={colorNum}>{value}</div>}

            {/*{!isDisabled && !falseValue && <div className={style.enterValue}>{message}</div>}*/}
            {/*{falseValue && <div className={style.error}>{message}</div>}*/}
            {/*{isDisabled && !falseValue && <div className={colorNum}>{value}</div>}*/}

         {/*   {falseValue && message}

            {falseValue
                    ? messageError
                    : trueValue
                        ? message && <div className={colorNum}>{value}</div> : ''}*/}
        </div>
    );
};