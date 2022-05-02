import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
    isDisabled: boolean
}

const Button = ({name, callBack, isDisabled}: ButtonPropsType) => {

    const onClickHandler = () => {
        callBack()
    }

    return (
        <div>
            <button onClick={onClickHandler} disabled={isDisabled}>{name}</button>
        </div>
    );
};

export default Button;