import React, {useEffect, useReducer, useState} from 'react';
import style from './css/advanceCounter.module.css';
import Counter from "./components/Counter";
import {Settings} from "./components/Settings";
import {
  counterReducer,
  incValueAC,
  InitialStateType,
  resetValueAC, setMessageAC,
  startValueAC, valueAC
} from "./store/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";


function AppWithRedux() {
  //// counter

  /*  const [value, dispatchValue] = useReducer(counterReducer, 0)*/
  /*const [maxValue, setMaxValue] = useReducer(counterReducer, 0)
  const [startValue, setStartValue] = useReducer(counterReducer, 0)
  const [isDisabled, setIsDisabled] = useState(true)
  */

  const value = useSelector<AppRootStateType, number>(state => state.counter.value)
  const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
  const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
  const message = useSelector<AppRootStateType, string>(state => state.counter.message)
  //const isDisabled = useSelector<AppRootStateType, boolean>(state => state.counter.isDisabled)
  const dispatch = useDispatch()

  const incButtonHandler = () => {
    const action = incValueAC()
    dispatch(action)
  }

  const resetButtonHandler = () => {
    const action = resetValueAC()
    dispatch(action)
  }

  ///////////////////////////localStorage/////////////////////////////////
  /*useEffect(() => {
      let maxValueAsString = localStorage.getItem('counterMaxValue')
      if (maxValueAsString) {
          let newMaxValue = JSON.parse(maxValueAsString)
          setMaxValue(newMaxValue)
      }
      let startValueAsString = localStorage.getItem('counterStartValue')
      if (startValueAsString) {
          let newStartValue = JSON.parse(startValueAsString)
          setStartValue(newStartValue)
      }
  }, [])
  useEffect(() => {
      localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))
      localStorage.setItem('counterStartValue', JSON.stringify(startValue))
  }, [maxValue, startValue])*/
  /////////////////////////////////////////////////////////////////////////

  const setButtonHandler = () => {

    //if (value != startValue || startValue < maxValue) {

    dispatch(valueAC(startValue))
    dispatch(setMessageAC(''))
    //dispatch(startValue)

    // if (startValue < 0 || startValue >= maxValue || maxValue < 0) {
    //     dispatch(isDisabledAC(false))  //false
    // } else {
    //     dispatch(isDisabledAC(true))   //true
    // }
  }
  const isSetDisabled = message !== 'Enter values and press set'

  return (
    <div className={style.content}>
      <div className={style.advanceCounter}>
        <div>
          <Settings
            maxValue={maxValue}
            //setMaxValue={setMaxValue}
            startValue={startValue}
            //setStartValue={setStartValue}
            setButtonHandler={setButtonHandler}
            isDisabled={isSetDisabled}
            //setIsDisabled={setIsDisabled}
          />
        </div>
        <div>
          <Counter
            maxValue={maxValue}
            startValue={startValue}
            value={value}
            incButtonHandler={incButtonHandler}
            resetButtonHandler={resetButtonHandler}
            //isDisabled={isDisabled}
          />
        </div>
      </div>
    </div>
  )
}

export default AppWithRedux;
