import React, { Component } from 'react';
import ActivityNavButton from './Input/ActivityNavButton.jsx';
import UserButton from './Input/UserButton.jsx';
import SettingsButton from './Input/SettingsButton.jsx';
import StatusButton from './Input/StatusButton.jsx';
import CallButton from './Input/CallButton.jsx';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeNav: 'activity-button',
        }
    }

    handleNavClick = event => {
        event.stopPropagation();
        // need to handle svg propagation
        const activeNav = event.target.id;
        
        this.setState({ activeNav });
    }

    render() {
        const { activities } = this.props;
        const { activeNav } = this.state;

        return (
            <footer>
                <nav onClick={this.handleNavClick}>
                    <ActivityNavButton 
                        activities={activities}
                        activeNav={activeNav} 
                        />
                    <UserButton 
                        activeNav={activeNav}
                    />
                    <CallButton 
                        activeNav={activeNav} 
                    />
                    <SettingsButton 
                        activeNav={activeNav}
                    />
                    <StatusButton 
                        activeNav={activeNav}
                    />
                </nav>
            </footer>
        )
    }
};

export default Footer;