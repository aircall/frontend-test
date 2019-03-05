import React from 'react';

const VerticalDivider = ({ classNames }) => {
    return (
        <div className={`vertical-divider ${classNames}`}>
                <span>.</span>
                <span>.</span>
                <span>.</span>
        </div>
    )
};

export default VerticalDivider;