import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import CallListCard from '../CallListCard/CallListCard.jsx'
import { getCalls } from '../../redux/calls/actions.js'
import './CallList.scss'

class CallsList extends Component {
  componentDidMount() {
    this.props.getCalls();
  }

  render() {
    const { calls } = this.props;
    return (
      <div className="CallList">
          <button className=".primary">Archive all Calls</button>
          <h1>Calls</h1>  
          <>
            {calls && Object.values(calls).map(call => (<Link key={call.id} className="CallList__item" to={`/call/${call.id}`}>
              <CallListCard call={call}/>
            </Link>))}
          </>
      </div>
    );
  }
}

const mapStateToProps = ({ calls }) => ({
  calls: calls.list
});

const mapDispatchToProps = {
  getCalls
}

export default connect(mapStateToProps, mapDispatchToProps)(CallsList)