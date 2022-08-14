import React from 'react';
import {Button} from "./Button";
import style from "../css/settings.module.css"
import Menu from "./Menu";


type SettingsPropsType = {
    maxValue: number
    //setMaxValue: (maxValue: number) => void
    startValue: number
    //setStartValue: (startValue: number) => void
    setButtonHandler: () => void
    isDisabled: boolean
    //setIsDisabled: (value: boolean) => void
}

export const Settings = ({
                             maxValue,
                             startValue,
                             setButtonHandler,
                             isDisabled,
                         }: SettingsPropsType) => {

    return (
        <div>
            <Menu
                maxValue={maxValue}
                startValue={startValue}
            />
            <div className={style.fieldWithButtons}>
                <Button name={"Set"}
                        callBack={setButtonHandler}
                    /*isDisabled={(startValue < 0 || startValue >= maxValue || maxValue < 0)}*/
                        isDisabled={isDisabled}/>
            </div>
        </div>
    );
};

