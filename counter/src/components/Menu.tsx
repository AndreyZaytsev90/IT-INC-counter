import React from 'react';
import style from '../css/menu.module.css'

const Menu = () => {
    return (
        <div className={style.counterMenu}>
            <div>
                <span>Max Value: </span>
                <span>Start Value:</span>
            </div>
            <div>
                <input type="number" style={{"marginLeft": "50px"}}/>
                <input type="number" style={{"marginLeft": "50px"}}/>
            </div>
        </div>
    );
};

export default Menu;