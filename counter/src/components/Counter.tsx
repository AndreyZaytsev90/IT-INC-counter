import React from 'react';
import {Screen} from "./Screen";
import {Button} from "./Button";
import style from "../css/counter.module.css"

type CounterPropsType = {
    value: number
    incButtonHandler: () => void
    resetButtonHandler: () => void
}

const Counter = (props: CounterPropsType) => {

    const {value, incButtonHandler, resetButtonHandler} = props

    return (
        <div className={style.counter}>
            <Screen
                value={value}
            />
            <div className={style.fieldWithButtons}>
                <Button name={"Inc"}
                        callBack={incButtonHandler}
                        isDisabled={value === 5}
                />
                <Button name={"Reset"}
                        callBack={resetButtonHandler}
                        isDisabled={value < 5}
                />
            </div>
        </div>
    );
};

export default Counter;