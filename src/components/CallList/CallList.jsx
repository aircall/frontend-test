import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import CallListCard from '../CallListCard/CallListCard.jsx'
import { getCalls, archiveCalls } from '../../redux/calls/actions.js'
import './CallList.scss'

class CallsList extends Component {
  constructor(props) {
    super(props);
    this.archiveAllCallsHandle = this.archiveAllCallsHandle.bind(this);
  }
  
  componentDidMount() {
    this.props.getCalls();
  }

  archiveAllCallsHandle() {
    this.props.archiveCalls();
  }

  render() {
    const { calls } = this.props;
    return (
      <div className="CallList">
          <h1>Calls</h1>  
          <>
            {calls && Object.values(calls).filter(call => !call.is_archived).map(call => (<Link key={call.id} className="CallList__item" to={`/call/${call.id}`}>
              <CallListCard call={call}/>
            </Link>))}
          </>
          <button className="primary" onClick={this.archiveAllCallsHandle}>Reset Archived Calls</button>
      </div>
    );
  }
}

const mapStateToProps = ({ calls }) => ({
  calls: calls.list
});

const mapDispatchToProps = {
  getCalls,
  archiveCalls
}

export default connect(mapStateToProps, mapDispatchToProps)(CallsList)