import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import ActivityItem from './ActivityItem.jsx';

export default class ActivityList extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        console.log('render', this.props);
        return (
            <div>
                <ul>        
                    {this.props.activities.map((activity) => 
                        activity.is_archived ? null : <ActivityItem key={activity.id} activity={activity} />
                    )}
                </ul>
                Loading : {this.props.fetching? 'yes': 'no'}
            </div>
        );z
    }
}