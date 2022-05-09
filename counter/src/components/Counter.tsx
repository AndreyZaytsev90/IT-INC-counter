import React, {useState} from 'react';
import {Screen} from "./Screen";
import {Button} from "./Button";
import style from "../css/counter.module.css"


const Counter = () => {

    const [value, setValue] = useState<number>(0)

    const IncButtonHandler = () => value < 5 ? setValue(value+1): value

    const ResetButtonHandler = () => value === 5 ? setValue(0): value

    return (
        <div className={style.counter}>
            <Screen value={value}/>
            <div className={style.fieldWithButtons}>
                <Button name={"Inc"} callBack={IncButtonHandler} isDisabled={value === 5}/>
                <Button name={"Reset"} callBack={ResetButtonHandler} isDisabled={value < 5}/>
            </div>
        </div>
    );
};

export default Counter;