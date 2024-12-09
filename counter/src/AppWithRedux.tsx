import React, {/*useEffect*/} from 'react';
import style from './css/advanceCounter.module.css';
import Counter from "./components/Counter";
import {Settings} from "./components/Settings";
import {
    incValueAC,
   // maxValueAC,
    resetValueAC,
    //setMaxValueFromLocalStorageTC,
    setMessageAC, //setStartValueFromLocalStorageTC,
   // startValueAC,
    valueAC
} from "./bll/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "./bll/store";


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
    //const message = useSelector<AppRootStateType, string>(state => state.counter.message)
    const dispatch = useAppDispatch()

    const incButtonHandler = () => {
        const action = incValueAC(value)
        dispatch(action)
    }

    const resetButtonHandler = () => {
        const action = resetValueAC(startValue)
        dispatch(action)
    }

    ///////////////////////////localStorage/////////////////////////////////
   /* useEffect(() => {
        dispatch(setMaxValueFromLocalStorageTC())
        dispatch(setStartValueFromLocalStorageTC())
    }, [])*/
    /////////////////////////////////////////////////////////////////////////

    const setButtonHandler = () => {
        dispatch(valueAC(startValue))
        dispatch(setMessageAC(''))
    }


    const isSetDisabled = (startValue < 0 || startValue >= maxValue || maxValue < 0) /*message !== 'Enter values and press set'*/

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
                        //isDisabled={isSetDisabled}
                        setIsDisabled={isSetDisabled}
                    />
                </div>
                <div>
                    <Counter
                        maxValue={maxValue}
                        startValue={startValue}
                        value={value}
                        incButtonHandler={incButtonHandler}
                        resetButtonHandler={resetButtonHandler}
                        setIsDisabled={isSetDisabled}
                    />
                </div>
            </div>
        </div>
    )
}

export default AppWithRedux;
