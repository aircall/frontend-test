import React from 'react';
import MissedCallIcon from '../../../static/svg/missed-call.svg';
import AnsweredCallIcon from '../../../static/svg/answered-call.svg';
import { missedCallTypes } from '../../../helpers/constants';

const CallTypeIcon = ({ call_type }) => {
    let selectedIcon;

    if (missedCallTypes.includes(call_type)) {
        selectedIcon = <MissedCallIcon />;
    } else {
        selectedIcon = <AnsweredCallIcon />;
    }

    return (
        <div className="call-type-icon">
            {selectedIcon}
        </div>
    )
}

export default CallTypeIcon;
