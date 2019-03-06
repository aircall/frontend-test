import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCalls } from '../../store/actions/callActions';
import CallLog from '../../components/CallLog/CallLog.jsx';

const mapStateToProps = state => {
  return {
    calls: state.callLogReducer.calls
  };
};

class CallLogs extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllCalls();
  }

  render() {
    let calls = [];
    if (this.props.calls) {
      console.log(this.props.calls);
      calls = this.props.calls.map(call => {
        return (
          <CallLog
            key={call.id}
            callType={call.all_type}
            created={call.created_at}
            direction={call.direction}
            from={call.from}
            to={call.to}
          />
        );
      });
    }

    return <div>{calls}</div>;
  }
}

export default connect(
  mapStateToProps,
  { getAllCalls }
)(CallLogs);
