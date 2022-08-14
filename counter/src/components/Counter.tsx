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
  setIsDisabled: boolean
}

const Counter = (props: CounterPropsType) => {

  const {maxValue, startValue, value, incButtonHandler, resetButtonHandler, setIsDisabled} = props

  return (
    <div>
      <Screen maxValue={maxValue} startValue={startValue} value={value}/>

      <div className={style.fieldWithButtons}>

        <Button name={"Inc"} callBack={incButtonHandler} isDisabled={value === maxValue || setIsDisabled}/>
        <Button name={"Reset"} callBack={resetButtonHandler} isDisabled={setIsDisabled}/>

      </div>
    </div>
  );
};

export default Counter;