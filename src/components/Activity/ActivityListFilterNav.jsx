import React from 'react';
import VerticalDivider from '../Common/VerticalDivider.jsx';
import ControlsButton from '../Common/Input/ControlsButton.jsx';

const ActivityListFilterNav = props => {
    const { handleNavClick, activeNav } = props;

    return (
        <div className="activity-filter-nav">
            <div onClick={handleNavClick} className="activity-filter-buttons">
                <button 
                    id="inbox" 
                    onClick={handleNavClick} 
                    className={`inbox-button ${activeNav === 'inbox' && 'active'}`}
                    >
                    Inbox
                </button>
                <button 
                    id="all" 
                    onClick={handleNavClick} 
                    className={`all-calls-button ${activeNav === 'all' && 'active'}`}
                    >
                    All calls
                </button>
            </div>
            
            <ControlsButton />
            <VerticalDivider classNames={"left"} />
            <VerticalDivider classNames={"right"} />
        </div>
    )
}

export default ActivityListFilterNav;