import React, {useState} from 'react';
import style from './css/advanceCounter.module.css';
import Counter from "./components/Counter";
import {Settings} from "./components/Settings";


function App() {
    //// counter
    const [value, setValue] = useState<number>(0)

    const incButtonHandler = () => value < maxValue ? setValue(value + 1) : value
    const resetButtonHandler = () => value === maxValue ? setValue(0) : value

    ////


    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [isDisabled, setIsDisabled] = useState(true)


    const setButtonHandler = () => {

        if (value != startValue || startValue < maxValue) {
            setValue(startValue)
            setStartValue(startValue)
        }
        if (startValue < 0 || startValue >= maxValue || maxValue < 0) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }


    }

    return (
        <div className={style.content}>
            <div className={style.advanceCounter}>
                <div>
                    <Settings
                        maxValue={maxValue}
                        setMaxValue={setMaxValue}
                        startValue={startValue}
                        setStartValue={setStartValue}
                        setButtonHandler={setButtonHandler}
                        isDisabled={isDisabled}
                        setIsDisabled={setIsDisabled}
                    />
                </div>
                <div>
                    <Counter
                        maxValue={maxValue}
                        startValue={startValue}
                        value={value}
                        incButtonHandler={incButtonHandler}
                        resetButtonHandler={resetButtonHandler}
                        isDisabled={isDisabled}
                    />
                </div>
            </div>
        </div>

    )
}

export default App;
