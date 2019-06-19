import './Detail.scss';

import * as React from 'react';

import { Call } from './shared/call.model';
import { getDisplayName, getTimeAsString, getViaDesc, getDateTimeAsString, getDurationAsString } from './shared/utils';

type DetailProps = {
  call?: Call;
  onClose: () => any;
  onArchive: () => any;
};

class Detail extends React.Component<DetailProps> {
  render() {
    const call = this.props.call;

    if (!call) {
      return <article></article>;
    }

    return (
      <article className='details'
        data-direction={call.direction}
        data-call-type={call.callType}>
        <div className='details__header'>
          <button className='details__back' onClick={this.props.onClose}>
            <span className='fa fa-long-arrow-left details__back-icon'></span>
            <span className='details__back-label'>Back to list</span>
          </button>
        </div>
        <div className='details__body'>
          <h1 className='details__title'>
            <div className='details__icon'>
              <span className='fa fa-phone details__icon-phone'></span>
              <span className='fa fa-long-arrow-down details__icon-inbound'></span>
              <span className='fa fa-long-arrow-up details__icon-outbound'></span>
            </div>
            <span className='details__name'>{getDisplayName(call)}</span>
          </h1>
          <ul>
            <li className='details__data'>
              <span className='details__data-label'>date:</span>
              <span className='details__data-value'>{getDateTimeAsString(call.createdAt)}</span>
            </li>
            <li className='details__data'>
              <span className='details__data-label'>from:</span>
              <span className='details__data-value'>{call.from}</span>
            </li>
            <li className='details__data'>
              <span className='details__data-label'>to:</span>
              <span className='details__data-value'>{call.to}</span>
            </li>
            <li className='details__data'>
              <span className='details__data-label'>via:</span>
              <span className='details__data-value'>{call.via}</span>
            </li>
            <li className='details__data'>
              <span className='details__data-label'>duration:</span>
              <span className='details__data-value'>{getDurationAsString(call.duration)}</span>
            </li>
            <li className='details__data'>
              <span className='details__data-label'>status:</span>
              <span className='details__data-value'>{call.callType}</span>
            </li>
          </ul>
          <div className='details__footer'>
            <button className='details__archive' onClick={this.props.onArchive}>
              <span className='fa fa-archive details__archive-icon'></span>
              <span className='details__archive-label'>Archive</span>
            </button>
          </div>
        </div>
      </article>
    );
  }
}

export default Detail;
