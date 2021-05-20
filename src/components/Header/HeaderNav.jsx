import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../css/navigation.css';

function Navigation() {
    return (
        <div className="navigation-bar flex-row space-around">
            <NavLink
                to="/"
                className="navigation-link"
                activeClassName="active"
                exact
            >
                Inbox
            </NavLink>
            <NavLink
                to="/archived"
                className="navigation-link"
                activeClassName="active"
                exact
            >
                Archived
            </NavLink>
        </div>
    );
}

export default Navigation;
