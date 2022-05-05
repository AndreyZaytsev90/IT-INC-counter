import React from 'react';
import style from "../css/screen.module.css"


type ScreenPropsType = {
    value: number
}

export const Screen = ({value}: ScreenPropsType) => {

    const colorNum = value < 5 ? style.black : style.red

    return (
        <div className={style.counterScreen}>
          <div className={colorNum}>{value}</div>
        </div>
    );
};
