import React, {useState} from 'react';
import Screen from "./Screen";
import Button from "./Button";

const Counter = () => {

    const [value, setValue] = useState<number>(0)

    const IncButtonHandler = () => value < 5 ? setValue(value+1): value

    const ResetButtonHandler = () => value === 5 ? setValue(0): value

    return (
        <div>
            <Screen value={value}/>
            <Button name={"Inc"} callBack={IncButtonHandler} isDisabled={value === 5}/>
            <Button name={"Reset"} callBack={ResetButtonHandler} isDisabled={value < 5}/>
        </div>
    );
};

export default Counter;