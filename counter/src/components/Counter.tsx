import React from 'react';
import {Screen} from "./Screen";
import {Button} from "./Button";
import style from "../css/counter.module.css"

type CounterPropsType = {
    maxValue: number
    startValue: number
    value: number
    incButtonHandler: () => void
    resetButtonHandler: () => void
    isDisabled: boolean
}

const Counter = (props: CounterPropsType) => {

    const {maxValue, startValue, value, incButtonHandler, resetButtonHandler, isDisabled} = props

    return (
        <div>
            <Screen maxValue={maxValue} startValue={startValue} value={value}  isDisabled={isDisabled}/>

            <div className={style.fieldWithButtons}>

                <Button name={"Inc"} callBack={incButtonHandler} isDisabled={!isDisabled}/>
                <Button name={"Reset"} callBack={resetButtonHandler} isDisabled={value < maxValue}/>

            </div>
        </div>
    );
};

export default Counter;