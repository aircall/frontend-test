import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import ActivityItem from './ActivityItem.jsx';
import { Link } from 'react-router-dom';

export default class ActivityDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {details: null};

        this.fetchDetails(this.props.id);
    }

    fetchDetails(id) {
        fetch(`https://aircall-job.herokuapp.com/activities/${id}`)
        .then((data) => {
            data.json().then((result) => {
                this.setState({...this.state, details:result});
            });
        });
    }

    render () {
        console.log('render', this.props);
        if (this.state.details === null) return '';
        return (
            <Fragment>
                <div>
                    <div>From: {this.state.details.from}</div>
                    <div>To: {this.state.details.from}</div>
                    <div>Via: {this.state.details.via}</div>
                    <div>Duration: {this.state.details.duration}s</div>
                </div>
                <br/>
                <Link to='/'>&lt; Back</Link>
            </Fragment>

        );
    }
}