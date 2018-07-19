
import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack, MdVoicemail } from 'react-icons/lib/md';
import moment from 'moment';
import 'moment-duration-format';

import Activity, { ACTIVITY_CALL_TYPE } from '../models/Activity';
import Loader from '../shared-components/loader/Loader';
import ActivityDirection from '../shared-components/activity-direction/ActivityDirection';

import './activity-details.css';

class ActivityDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      activity: undefined,
      isLoading: true,
    };
    this.listenToVoicemail = this.listenToVoicemail.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.setState({ isLoading: true });
    Activity.getById(id)
      .then(activity => this.setState({ activity, isLoading: false }));
  }

  listenToVoicemail() {
    console.log('listening', this);
  }

  render() {
    const { activity, isLoading } = this.state;
    if (!isLoading) {
      let voiceMail;
      if (activity.callType === ACTIVITY_CALL_TYPE.voicemail) {
        voiceMail = (
          <div className="value">
            <span>
              Left a voicemail
            </span>
            <span>
              <MdVoicemail onClick={this.listenToVoicemail} />
            </span>
          </div>
        );
      }
      return (
        <div className="details">
          <div className="details_back">
            <Link to="/">
              <MdArrowBack />
              Back
            </Link>
          </div>
          <div className="details_content">
            <div className="value">
              <ActivityDirection direction={activity.direction} callType={activity.callType} />
              {moment(activity.createdAt).format('LLLL')}
            </div>
            <div className="value">
              <span>
                from
              </span>
              <span>
                {activity.from}
              </span>
            </div>
            <div className="value">
              <span>
                to
              </span>
              <span>
                {activity.to}
              </span>
            </div>
            <div className="value">
              <span>
                duration
              </span>
              <span>
                {moment.duration(Number(activity.duration), 'seconds').format('m [min], s [s]')}
              </span>
            </div>
            <div className="value">
              <span>
                via
              </span>
              <span>
                {activity.via}
              </span>
            </div>
            {voiceMail}
          </div>
        </div>
      );
    }

    return (
      <Loader />
    );
  }
}

export default ActivityDetails;
