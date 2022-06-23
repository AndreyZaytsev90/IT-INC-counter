import React, {useState} from 'react';
import {Screen} from "./Screen";
import {Button} from "./Button";
import style from "../css/settings.module.css"
import Menu from "./Menu";


export const Settings = () => {

    /*const [value, setValue] = useState<number>(0)

    const IncButtonHandler = () => value < 5 ? setValue(value+1): value

    const ResetButtonHandler = () => value === 5 ? setValue(0): value
*/
    return (
        <div className={style.settings}>
            <Menu />
            <div className={style.fieldWithButtons}>
            <Button name={"Set"} callBack={()=>{}} isDisabled={false}/>
            </div>
        </div>
    );
};

