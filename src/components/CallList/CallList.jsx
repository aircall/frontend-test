import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { getCalls } from '../../redux/calls/actions.js'

class CallsList extends Component {
  componentDidMount() {
    this.props.getCalls();
  }

  render() {
    const { calls } = this.props;
    return (
      <div>
          <button>Archive all Calls</button>
          <h1>Calls</h1>  
          <div>
            {calls && calls.map(call => <Link to={`/calls/${call.id}`}>{call.from}</Link>)}
          </div>
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