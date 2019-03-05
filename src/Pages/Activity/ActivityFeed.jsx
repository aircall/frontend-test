import React, { Component } from 'react';
import ActivityList from '../../components/Activity/ActivityList.jsx';
import ActivityListFilterNav from '../../components/Activity/ActivityListFilterNav.jsx';
import ActivityArchiveButton from '../../components/Activity/ActivityArchiveButton.jsx';
import ActivityResetButton from '../../components/Activity/ActivityResetButton.jsx';
import { getActiveList } from '../../helpers/activity';
import Loader from '../../components/Common/Loader.jsx';

class ActivityFeed extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeNav: 'inbox',
        }
    }
    

    handleNavClick = event => {
        event.stopPropagation();

        const activeNav = event.target.id;
        this.setState({ activeNav });
    }

    render() {
        const {activity, getActivities, updateActivity, resetActivities, 
            updateActivities, history } = this.props;
        const { activities, updateActivitiesPending, isPending } = activity;
        const { activeNav } = this.state;
        const activeList = getActiveList(activeNav, activities);
        const isActiveList = activeList.length > 0;
        const showLoader = isPending || updateActivitiesPending;
        let activeFilterButton;

        if (activeNav === 'inbox') {
            activeFilterButton = (  
                <ActivityArchiveButton 
                    archiveAll={true} 
                    activities={activities} 
                    updateActivities={updateActivities}
                    updateActivity={updateActivity}
                    getActivities={getActivities}
                />)
        } else if (activeNav === 'all') {
            activeFilterButton = (
                <ActivityResetButton 
                    getActivities={getActivities} 
                    resetActivities={resetActivities} 
                />
            )           
        }

        return (
            <section className="activity-feed-section">
             {showLoader ? 
                    <Loader />
                    :
                    <div>
                        <ActivityListFilterNav activeNav={activeNav} handleNavClick={this.handleNavClick} />
                        {isActiveList && (
                            <div>
                                {activeFilterButton}
                                <ActivityList history={history} activeNav={activeNav} activeList={activeList} />
                            </div>
                        )}
                    </div>}
            </section>)
        }
};

export default ActivityFeed;