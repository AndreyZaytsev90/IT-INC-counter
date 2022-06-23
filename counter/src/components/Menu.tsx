import React from 'react';
import style from '../css/menu.module.css'

type MenuPropsType = {
    startValue: number
}

const Menu = ({startValue}: MenuPropsType) => {
    return (
        <div className={style.counterMenu}>
            <div>
                <span>Max Value: </span>
                <span>Start Value:</span>
            </div>
            <div>
                <input name={"MaxValue"} type="number" style={{"marginLeft": "50px"}} />
                <input value={startValue} name={"StartValue"} type="number" style={{"marginLeft": "50px"}}/>
            </div>
        </div>
    );
};

export default Menu;