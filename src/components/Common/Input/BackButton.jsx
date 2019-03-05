import React from 'react';
import BackIcon from '../../../static/svg/back-icon.svg';

const BackButton = ({ history }) => {
    return (
    <button onClick={() => history.push('/')} id="back-button" className="back-button">
            <BackIcon width={25}/>
    </button>);
}

export default BackButton;