import React from 'react';

type ScreenPropsType = {
    value: number
}

const Screen = ({value}: ScreenPropsType) => {
    return (
        <div>{value}</div>
    );
};

export default Screen;