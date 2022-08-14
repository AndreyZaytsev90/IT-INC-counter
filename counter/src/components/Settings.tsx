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
  //isSetDisabled: boolean
  setIsDisabled: boolean
}

export const Settings = ({
                           maxValue,
                           startValue,
                           setButtonHandler,
                           setIsDisabled
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
                isDisabled={setIsDisabled}
          /*isDisabled={!isSetDisabled}*//>
      </div>
    </div>
  );
};

