import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import {Settings} from "./components/Settings";

function App() {
    //// counter
    const [value, setValue] = useState<number>(0)
    const incButtonHandler = () => value < 5 ? setValue(value+1): value
    const resetButtonHandler = () => value === 5 ? setValue(0): value
    ////

    const [startValue, setStartValue] = useState<number>(4)
    const setButtonHandler = () => {
        if(value != startValue) {
            setValue(startValue)
        }
    }

    return (
        <div>
            <Counter
                value={value}
                incButtonHandler={incButtonHandler}
                resetButtonHandler={resetButtonHandler}
            />
            <Settings
                startValue={startValue}
                setButtonHandler={setButtonHandler}
            />
        </div>
    )
}

export default App;
