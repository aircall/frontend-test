import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default class ActivityItem extends Component {
    constructor(props) {
        super(props);
    }

    archive(id) {
        window.updateActivity(id, true);
    }

    click(e) {
        e.stopPropagation();
        e.preventDefault();
        this.archive(this.props.activity.id);
    }

    renderInbound() {
        return (
            <Fragment>
                <Link to={`/activity/${this.props.activity.id}`}>
                    <div>INBOUND</div>
                    <div>from: {this.props.activity.from}</div>
                    <div>to: {this.props.activity.to != null ? this.props.activity.to : "(Unknown)"}</div>
                    <div>via: {this.props.activity.via}</div>
                </Link>
                <button onClick={this.click.bind(this)}>Archive</button>
            </Fragment>
        )
    }

    renderOutbound() {
        return (
            <Fragment>
                <Link to={`/activity/${this.props.activity.id}`}>
                    <div>OUTBOUND</div>
                    <div>from: {this.props.activity.from}</div>
                    <div>to: {this.props.activity.to != null ? this.props.activity.to : "(Unknown)"}</div>
                    <div>via: {this.props.activity.via}</div>
                </Link>
                <button onClick={this.click.bind(this)}>Archive</button>
            </Fragment>
        )
    }

    render () {
        return (
            
                <li key={this.props.activity.id} className="activity-item">
                    {this.props.activity.direction === "inbound" ? this.renderInbound(): this.renderOutbound()}
                </li>
        );
    }
}