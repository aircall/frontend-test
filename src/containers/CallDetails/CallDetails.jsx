import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleCall } from '../../store/actions/callActions';

const mapStateToProps = state => {
  return {
    singleCall: state.callDetailReducer.singleCall
  };
};

class CallDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSingleCall();
  }

  render() {
    return (
      <div>
        {this.props.singleCall ? (
          <div>
            <p>{this.props.singleCall.call_type}</p>
            <p>{this.props.singleCall.created_at}</p>
            <p>{this.props.singleCall.direction}</p>
            <p>{this.props.singleCall.duration}</p>
            <p>{this.props.singleCall.from}</p>
            <p>{this.props.singleCall.id}</p>
            <p>{this.props.singleCall.to}</p>
            <p>{this.props.singleCall.via}</p>
            <p>{this.props.singleCall.is_archived}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { getSingleCall }
)(CallDetails);
