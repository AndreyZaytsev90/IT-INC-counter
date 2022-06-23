import React, {useState} from 'react';
import {Screen} from "./Screen";
import {Button} from "./Button";
import style from "../css/settings.module.css"
import Menu from "./Menu";


type SettingsPropsType = {

    startValue: number
    setButtonHandler: () => void
}

export const Settings = ({ startValue, setButtonHandler}: SettingsPropsType) => {


    return (
        <div className={style.settings}>
            <Menu
                startValue={startValue}
            />
            <div className={style.fieldWithButtons}>
                <Button name={"Set"}
                        callBack={setButtonHandler}
                        isDisabled={false}/>
            </div>
        </div>
    );
};

