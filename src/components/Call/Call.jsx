import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { getCall } from '../../redux/calls/actions.js'
import './Call.scss'

class Call extends Component {
  componentDidMount() {
    this.props.getCall(this.props.match.params.id);
  }

  /*archiveCallHandle(call) {
    this.props.deleteVideo(currentVideo);
    this.props.history.push(`/`);
  }*/

  render() {
    const { calls } = this.props;
    return (
      <div className="Call">
         Hello call
      </div>
    );
  }
}

const mapStateToProps = ({ calls }) => ({
  calls: calls.list
});

const mapDispatchToProps = {
  getCall
}

export default connect(mapStateToProps, mapDispatchToProps)(Call)